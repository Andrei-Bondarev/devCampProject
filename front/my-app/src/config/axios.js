import axios from 'axios'

export const apiClient = axios.create({
    baseURL: 'http://localhost:3200/app',
    responseType: 'json'
});