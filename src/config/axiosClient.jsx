import axios from 'axios'

const axiosClient = axios.create({
    baseURL: "https://dekko-backend.onrender.com"
})

export default axiosClient;