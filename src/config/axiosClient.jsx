import axios from 'axios'

const axiosClient = axios.create({
    baseURL: "http://localhost:4000"
    //pegar aqui la url de postman
})

export default axiosClient;