import { instance as Axios } from "./axios.service";

const UserService = {
  createUser(payload) {
    return Axios({
      method: 'POST',
      url: '/user',
      data: payload
    });
  },

  getUsers() {
    return Axios({
      mathod: 'GET',
      url: '/user'
    });
  },

  getUserByEmail(email) {
    return Axios({
      method: 'GET',
      url: `/user/email/${email}`
    });
  },

  getUserById(id) {
    return Axios({
      method: 'GET',
      url: `/user/${id}`
    });
  },

  updateUser(id) {
    return Axios({
      method: 'PATCH',
      url: `/user/${id}`
    });
  },

  deleteUser(id) {
    return Axios({
      method: 'DELETE',
      url: `/user/${id}`
    });
  }
};

export default UserService;