import axiosClient from "./axiosClient";

const authApi = {
  login(data) {
    const url = "/auth/login";
    return axiosClient.post(url, data);
  },
  refreshToken(data) {
    const url = "/auth/refresh-token";
    return axiosClient.post(url, data);
  },
  signup(data) {
    const url = "/auth/signup";
    return axiosClient.post(url, data);
  }
};

export default authApi;
