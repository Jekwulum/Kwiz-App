import { instance as Axios } from "./axios.service";

const AuthService = {
    login(payload) {
        return Axios({
            method: 'POST',
            url: '/auth/login',
            data: payload
        })
    },

    logout(){
        return Axios({
            method: 'POST',
            url: '/auth/logout',
        });
    }
};

export default AuthService;