import axiosClient from "./axiosClient";

const usersApi = {
  getInfo(id) {
    const url = `/user/`;
    return axiosClient.get(url,id);
  },
  updateUser(data) {
    const url = `/user/update`;
    return axiosClient.post(url,data);
  }
};

export default usersApi;
