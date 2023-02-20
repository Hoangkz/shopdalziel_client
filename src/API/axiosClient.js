import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
axiosClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  response =>{
    return response
  },
  error => {

    const originalRequest = error.config;
    const refreshToken = localStorage.getItem('refresh_token');

    if (
      error.response.status === 401 &&
      refreshToken &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      return axiosClient
        .post('/auth/refresh-token/', { refresh_token: refreshToken })
        .then(response => {
          const { access: newToken } = response.data;
          localStorage.setItem('access_token', newToken);
          axiosClient.defaults.headers['Authorization'] = `Bearer ${newToken}`;
          return axiosClient(originalRequest);
        });
    }
    return Promise.reject(error);
  }
  
);
export default axiosClient;
