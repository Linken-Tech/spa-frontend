import { endPoint } from "@/app/api/apiConfig"
import axios from "axios"

// vehicle model


// vehicle brand


// vehicle sale
export const getVehicleSale = () => {
    return axios.get(endPoint.vehicleSale).then((response) => {
        return response
    })
}

export const createVehicleSale = (data: any) => {
    return axios.post(endPoint.vehicleSale, data).then((response) => {
        return response
    })
}

export const updateVehicleSale = (id: any, data: any) => {
    return axios.patch(endPoint.vehicleSale, id, data).then((response) => {
        return response
    })
}

export const deleteVehicleSale = (id: any) => {
    return axios.delete(endPoint.vehicleSale, id).then((response) => {
        return response
    })
}

// vehicle rent
export const getVehicleRent = () => {
    return axios.get(endPoint.vehicleSale).then((response) => {
        return response
    })
}

export const createVehicleRent = (data: any) => {
    return axios.post(endPoint.vehicleSale, data).then((response) => {
        return response
    })
}

export const updateVehicleRent = (id: any, data: any) => {
    return axios.patch(endPoint.vehicleSale, id, data).then((response) => {
        return response
    })
}

export const deleteVehicleRent = (id: any) => {
    return axios.delete(endPoint.vehicleSale, id).then((response) => {
        return response
    })
}

// export vehicle documents
