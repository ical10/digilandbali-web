import getConfig from 'next/config';

import axios, {AxiosInstance} from 'axios';
import Cookies from 'js-cookie';
import {getChallengeAndSignIn} from 'src/lib/api/auth';

let API: AxiosInstance;

const {publicRuntimeConfig} = getConfig();

const axiosInstance = (): AxiosInstance => {
  if (!API) {
    API = axios.create({
      baseURL: publicRuntimeConfig.apiURL,
      headers: {'Content-Type': 'application/json'},
    });

    API.interceptors.request.use(request => {
      const token = Cookies.get('access_token');
      if (token) {
        API.defaults.headers.Authorization = `Bearer ${token}`;
      }
      return request;
    });

    API.interceptors.response.use(
      response => {
        return response;
      },
      async function (error) {
        const originalRequest = error.config;
        if (
          error.response.status === 403 ||
          (error.response.status === 401 && !originalRequest._retry)
        ) {
          originalRequest._retry = true;
          let user = Cookies.get('user');
          user = user.replace(/["]/g, '');
          const token = await getChallengeAndSignIn(user);
          Cookies.set('access_token', token);
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
          return API(originalRequest);
        }
        return Promise.reject(error);
      },
    );
  }

  return API;
};

export default axiosInstance;
