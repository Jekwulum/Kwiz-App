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
        console.log("here 3");
        return Axios({
            method: 'POST',
            url: '/auth/logout',
        });
    }
};

export default AuthService;