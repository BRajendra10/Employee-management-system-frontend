import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/api/v1/employees',
    withCredentials: true,
    timeout: 10000
})

export default api