import { endPoint } from "./apiConfig"
import axios from "axios"

export const logIn = () => {
    return axios.post(endPoint.register, {
        username: "jasmine109",
        password: "jasmineccy"
    }).then((response) => {
        console.log(response.data)
    })

}