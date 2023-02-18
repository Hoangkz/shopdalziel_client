import axiosClient from "./axiosClient";

const authApi = {
  login(data) {
    const url = "/login/";
    return axiosClient.post(url, data);
  },
  signup(data) {
    const url = "/auth/signup";
    return axiosClient.post(url, data);
  }
};

export default authApi;
