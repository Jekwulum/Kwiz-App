import Cookies from "js-cookie";
import encryptHelper from './encryptHelper';

const cookieHelper = {
    get: key => {
        return encryptHelper.decrypt(Cookies.get(key));
    },

    set: (key, data, ex) => {
        const dataEncrypted = encryptHelper.encrypt(data);
        Cookies.set(key, dataEncrypted, {expires: ex});
    },

    remove: key => {
        Cookies.remove(key);
    }
};

export default cookieHelper;