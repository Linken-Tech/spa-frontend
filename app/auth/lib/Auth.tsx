import { endPoint } from "../../api/apiConfig"
import axios from "axios"
import AxiosInstance from "../../api/apiRequest"

export const signUp = (data: any) => {
    return axios.post(endPoint.signUp, data).then((response) => {
        return response
    })
}

export const logIn = (params: any) => {
    return AxiosInstance.post(endPoint.login, params).then((response) => {
        return response
    }).catch(error => {
        console.error('Error:', error.message);
      });
}

export const removeToken = () => {
    localStorage.removeItem('USER_TOKEN');
    // localStorage.removeItem('persist:root'); //clear redux persist state on logout
  };