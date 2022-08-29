import getConfig from 'next/config';

import axios, {AxiosInstance} from 'axios';
import Cookies from 'js-cookie';
import {getChallengeAndSignIn} from 'src/lib/api/auth';

let API: AxiosInstance;

const {publicRuntimeConfig} = getConfig();

const axiosInstance = (token): AxiosInstance => {
  API = axios.create({
    baseURL: publicRuntimeConfig.apiURL,
    headers: {'Content-Type': 'application/json', Authorization: token ? `Bearer ${token}` : ''},
  });

  API.interceptors.request.use(request => {
    API.defaults.headers.Authorization = `Bearer ${token}`;
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

        if (user) {
          user = user.replace(/["]/g, '');
          const token = await getChallengeAndSignIn(user);
          Cookies.set('access_token', token);
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
          return API(originalRequest);
        } else {
          throw new Error('Please reconnect your Metamask!');
        }
      }
      return Promise.reject(error);
    },
  );

  return API;
};

export default axiosInstance;
