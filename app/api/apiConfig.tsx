// export const baseURL = process.env.API_BASE_URL
export const baseURL = "http://0.0.0.0:8000/v2"

export const endPoint = {
    register: `${baseURL}/auth/`,
    login: `${baseURL}/auth/login`,
    verifyToken: ``
}