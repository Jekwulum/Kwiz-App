import axios from 'axios';
import { configs } from '../helpers/constants';
import cookieHelper from '../helpers/cookieHelper';
import tokenHelper from '../helpers/tokenHelper';

const BASE_URL = "http://localhose:4000";

export const instance = axios.create({ baseURL: BASE_URL });

instance.interceptors.request.use(config => {
    const token = tokenHelper.getToken();
    const headers = { ...config.headers, 'Content-Type': 'application/json', Authorization: `JWT ${token}` }

    if (tokenHelper.checkIfLoggedIn()) config.headers = headers;
    else config.headers = { ...config.headers, 'Content-Type': 'application/json' };
    return config;
}, error => Promise.reject(error));

instance.interceptors.response.use(response => response, error => {
    const token = tokenHelper.getToken();
    if (error.response.status === 401 && token) {}
});