// export const baseURL = process.env.API_BASE_URL
export const baseURL = "http://localhost:8000/v2"

export const endPoint = {
    signUp: `${baseURL}/user/user/`,
    login: `${baseURL}/user/auth/`,
    verifyToken: `${baseURL}/auth/token/verify/`,
    vehicleBrand: `${baseURL}/vehicle/brand/`,
    vehicleModel: `${baseURL}/vehicle/vehicle-model/`,
    vehicleSale: `${baseURL}/vehicle/vehicle-sale/`,
    vehicleRent: `${baseURL}/vehicle/vehicle-rent/`,
    exportVehicleDocs: `${baseURL}/vehicle/download-docs/`,
    user: `${baseURL}/user/user/`,
    organization: `${baseURL}/organization/organization/`,
    feedback: `${baseURL}/feedback/feedback`
}