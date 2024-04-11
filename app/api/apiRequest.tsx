import axios from 'axios'
import { baseURL, endPoint } from './apiConfig';

const AxiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

AxiosInstance.interceptors.request.use(
    async (config) => {
        const userToken = localStorage.getItem("USER TOKEN")
        if (userToken) {
            axios.post(endPoint.verifyToken, {
                token: userToken
            }).then((response) => {
                // console.log('axios instance response', response);
            }).catch((error) => {
                config.cancelToken = new axios.CancelToken((cancel) =>
                    cancel('Your token has expired. Please login again.')
                );
                // removeToken();
            })
        }
        else {
            // config.cancelToken = new axios.CancelToken((cancel) =>
            //     cancel('Your token has expired. Please login again.')
            // );
        }
        config.headers.authorization = 'Bearer ' + userToken;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

AxiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (axios.isCancel(error)) {
        // message.error(error.message);
  
        return false;
      } else if (!error.response) {
        return false;
      } else {
        return Promise.reject(error);
      }
    }
  );
  
export default AxiosInstance;