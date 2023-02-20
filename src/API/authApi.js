import axiosClient from "./axiosClient";

const authApi = {
  login(data) {
    const url = "/auth/login";
    return axiosClient.post(url, data);
  },
  refresh_Token(data) {
    const url = "/auth/refresh-token";
    return axiosClient.post(url, data);
  },
  signup(data) {
    const url = "/auth/signup";
    return axiosClient.post(url, data);
  },
  refreshToken(token) {
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
};

export default authApi;
