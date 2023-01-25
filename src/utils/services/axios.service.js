import axios from 'axios';
import { configs } from '../helpers/constants';
import cacheHelper from '../helpers/cacheHelper';
import cookieHelper from '../helpers/cookieHelper';
import tokenHelper from '../helpers/tokenHelper';

const BASE_URL = "http://localhost:4000";

export const instance = axios.create({ baseURL: BASE_URL });

instance.interceptors.request.use((request) => {
    const token = tokenHelper.getToken();
    const headers = { 'Content-Type': 'application/json', 'authorization': `Bearer ${token}` }

    if (tokenHelper.checkIfLoggedIn()) request.headers = headers;
    else request.headers = { 'Content-Type': 'application/json' };
    return request;
}, error => Promise.reject(error));

instance.interceptors.response.use(response => response, error => {
    const token = tokenHelper.getToken();
    if (error.response.status === 401 && token) {
        cookieHelper.remove(configs.KEY);
        cacheHelper.clear();
        window.location.href = '/login';
    } else return error.response;
});