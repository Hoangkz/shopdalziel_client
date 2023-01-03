import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});
axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    const { config, status } = error.response;
    if (config.url === "/auth/signup" && status === 400) {
      throw new Error("Địa chỉ email đã được đăng ký");
    }
    if (config.url === "/auth/login" && status === 400) {
      throw new Error("Sai tên tài khoản hoặc mật khẩu");
    }
    return Promise.reject(error);
  }
);
export default axiosClient;
