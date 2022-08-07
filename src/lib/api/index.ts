import getConfig from 'next/config';

import axios, {AxiosInstance} from 'axios';

let API: AxiosInstance;

const {publicRuntimeConfig} = getConfig();

export const initialize = (): AxiosInstance => {
  if (!API) {
    API = axios.create({
      baseURL: publicRuntimeConfig.apiURL,
    });

    API.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        if (error.response) {
          console.error(
            JSON.stringify({
              name: '[digilandapi-error][error]',
              detail: error.response?.data,
            }),
          );
        } else {
          console.error('[error]', error);
        }

        return Promise.reject(error);
      },
    );
  }

  return API;
};

export default initialize;
