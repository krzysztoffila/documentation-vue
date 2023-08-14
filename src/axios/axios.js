import axios from 'axios';
import getCookie from '@/helpers/get-cookie';

const axiosOptions = {
    baseURL: `https://documentation-vue.projects.codennection.pl/api`,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
    }
}

const tokenJWT = getCookie('token')

if(tokenJWT) {
    axiosOptions.headers.Authorization = `Bearer ${tokenJWT}`
}

export const axiosApi = axios.create(axiosOptions)