import axios from "axios";


const instance = axios.create({
    baseURL:'http://localhost:5000/api'
})

instance.interceptors.request.use((config)=>{
    console.log(window.localStorage.getItem('token'),' token');
    config.headers.Authorization=window.localStorage.getItem('token')
    return config
})

export default instance;