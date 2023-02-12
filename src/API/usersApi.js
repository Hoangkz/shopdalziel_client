import axiosClient from "./axiosClient";

const usersApi = {
  getInfo(id) {
    const url = `/user-info/?user_id=${id}`;
    return axiosClient.get(url);
  }
};

export default usersApi;
