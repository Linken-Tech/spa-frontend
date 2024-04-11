import { endPoint } from "./apiConfig"
import axios from "axios"
import AxiosInstance from "./apiRequest"

export const signUp = (data: any) => {
    // return AxiosInstance.post(endPoint.register, params)
    return axios.post(endPoint.register, data).then((response) => {
        console.log(response.data)
        console.log("1212222")
    })
}

export const logIn = (params: any) => {
    return AxiosInstance.post(endPoint.login, params);
}