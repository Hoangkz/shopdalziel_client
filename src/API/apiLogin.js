import axiosClient from "./shopApi";

const authApi = {
  login(data) {
    const url = "/login/";
    return axiosClient.post(url, data);
  },
};

export default authApi;
