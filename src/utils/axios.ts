import Axios from "axios";
import { message } from "antd";

const axios = Axios.create({
    baseURL: "https://dummyjson.com"
})


axios.interceptors.response.use(
    (res) => res,
    (err) => {
        const errorMessage = err.ree || err.message
        message.error(errorMessage)
        Promise.reject(errorMessage)
    }
)

export const setaxiostoken = (token: string) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`
}

export const removeAxiosToken = () => {
    axios.defaults.headers.Authorization = null
}

export default axios