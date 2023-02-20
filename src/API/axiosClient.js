import jwt_decode from "jwt-decode";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const refreshToken = (token) => {
  axiosClient.post('/api/refreshToken', null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((response) => {
    return response.data.token;
  })
  .catch((error) => {
    return error;
  });
}

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
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    const { status } = error.response;

    // Nếu lỗi 401 và chưa gửi yêu cầu refresh token
    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const token = localStorage.getItem('token');

      if (token) {
        const decoded = jwt_decode(token);

        // Kiểm tra xem token đã hết hạn chưa
        if (decoded.exp < Date.now() / 1000) {
          // Gọi hàm refresh token để lấy token mới
          return refreshToken(token)
            .then((newToken) => {
              // Lưu trữ token mới vào localStorage hoặc sessionStorage
              localStorage.setItem('token', newToken);

              // Thay đổi token trong header của yêu cầu gốc
              originalRequest.headers.Authorization = `Bearer ${newToken}`;

              // Gửi lại yêu cầu gốc
              return axiosClient(originalRequest);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }
    }
    return Promise.reject(error);
  }
  
);
export default axiosClient;
