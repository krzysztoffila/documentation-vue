import axios from 'axios';

export const axiosApi = axios.create({
    baseURL: `https://documentation-vue.projects.codennection.pl`,
    loginURL: `https://documentation-vue.projects.codennection.pl/api/auth/login`,
    registerURL: `https://documentation-vue.projects.codennection.pl/api/auth/register`,
    headers: {
        Authorization: 'Bearer {token}'
    }
})