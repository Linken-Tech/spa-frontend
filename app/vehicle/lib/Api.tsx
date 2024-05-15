import { endPoint } from "@/app/api/apiConfig"
import axios from "axios"

// vehicle model
export const getVehicleModel = () => {
    return axios.get(endPoint.vehicleModel).then((response) => {
        return response
    })
}

export const createVehicleModel = (data: any) => {
    return axios.post(endPoint.vehicleModel, data).then((response) => {
        return response
    })
}

export const updateVehicleModel = (id: any, data: any) => {
    return axios.patch(endPoint.vehicleModel, id, data).then((response) => {
        return response
    })
}

export const deleteVehicleModel = (id: any) => {
    return axios.delete(endPoint.vehicleModel, id).then((response) => {
        return response
    })
}

// vehicle brand
export const getVehicleBrand = () => {
    return axios.get(endPoint.vehicleBrand).then((response) => {
        return response
    })
}

export const createVehicleBrand = (data: any) => {
    return axios.post(endPoint.vehicleBrand, data).then((response) => {
        return response
    })
}

export const updateVehicleBrand = (id: any, data: any) => {
    return axios.patch(endPoint.vehicleBrand, id, data).then((response) => {
        return response
    })
}

export const deleteVehicleBrand = (id: any) => {
    return axios.delete(endPoint.vehicleBrand, id).then((response) => {
        return response
    })
}

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
    return axios.get(endPoint.vehicleRent).then((response) => {
        return response
    })
}

export const createVehicleRent = (data: any) => {
    return axios.post(endPoint.vehicleRent, data).then((response) => {
        return response
    })
}

export const updateVehicleRent = (id: any, data: any) => {
    return axios.patch(endPoint.vehicleRent, id, data).then((response) => {
        return response
    })
}

export const deleteVehicleRent = (id: any) => {
    return axios.delete(endPoint.vehicleRent, id).then((response) => {
        return response
    })
}

// export vehicle documents
export const getVehicleDocs = () => {
    return axios.get(endPoint.vehicleExportDocs).then((response) => {
        return response
    })
}

export const createVehicleDocs = (data: any) => {
    return axios.post(endPoint.vehicleExportDocs, data).then((response) => {
        return response
    })
}

export const updateVehicleDocs = (id: any, data: any) => {
    return axios.patch(endPoint.vehicleExportDocs, id, data).then((response) => {
        return response
    })
}

export const deleteVehicleDocs = (id: any) => {
    return axios.delete(endPoint.vehicleExportDocs, id).then((response) => {
        return response
    })
}