import axios from 'axios';

const axiosOptions = {
    baseURL: `https://documentation-vue.projects.codennection.pl/api`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
    }
}

const tokenJWT = localStorage.getItem('token')

if(tokenJWT) {
    axiosOptions.headers.Authorization = `Bearer ${tokenJWT}`
}

export const axiosApi = axios.create(axiosOptions)