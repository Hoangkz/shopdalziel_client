import axiosClient from "./axiosClient";

const usersApi = {
  getInfo(id) {
    const url = `/user/`;
    return axiosClient.get(url,id);
  },
  updateUser(data) {
    const url = `/user/update`;
    return axiosClient.post(url,data);
  },
  changePassword(data) {
    const url = `/user/changePassword`;
    return axiosClient.post(url,data);
  },
  forgotpassword(data) {
    const url = `/user/forgotPassword`;
    return axiosClient.post(url,data);
  },
};

export default usersApi;
