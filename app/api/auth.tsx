import { endPoint } from "./apiConfig"
import axios from "axios"
import AxiosInstance from "./apiRequest"

export const signUp = (data: any) => {
    // return AxiosInstance.post(endPoint.register, params)
    return axios.get(endPoint.register, data).then((response) => {
        console.log(response.data)
        console.log("sign uppp")
    })
}

export const logIn = (params: any) => {
    return AxiosInstance.post(endPoint.login, params).then((response) => {
        console.log("loginnn")
    }).catch(error => {
        console.error('Error:', error.message);
      });
}