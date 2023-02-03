import { configs } from "./constants";
import cookieHelper from './cookieHelper';

const tokenHelper = {
    checkIfLoggedIn() {
        const TOKEN = cookieHelper.get(configs.KEY);
        return !!TOKEN;
    },

    saveToken(token) {
        cookieHelper.set(configs.KEY, token, configs.COOKIE_EXPIRY_PERIOD);
        localStorage.setItem(configs.KEY, token);
    },

    saveUserId(userId) {
        cookieHelper.set(configs.USER_KEY, userId, configs.COOKIE_EXPIRY_PERIOD);
    },

    getToken() {
        return cookieHelper.get(configs.KEY);
    },

    getUserId() {
        return cookieHelper.get(configs.USER_KEY);
    }
};

export default tokenHelper;