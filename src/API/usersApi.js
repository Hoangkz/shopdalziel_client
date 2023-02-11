import axiosClient from "./axiosClient";

const usersApi = {
  getInfo(id) {
    const url = `/user-info/?user_id=${id}`;
    return axiosClient.get(url);
  },
  getNotifications(id) {
    const url = `/user-notifications/?user_id=${id}`;
    return axiosClient.get(url);
  },
  updateNotification(data) {
    const url = `/user-notifications/`;
    return axiosClient.put(url, data);
  },
  readAllNotifications(data) {
    const url = `/read-all-notifications/`;
    return axiosClient.put(url, data);
  },
  createNotification(data) {
    const url = "/user-notifications/";
    return axiosClient.post(url, data);
  },
  updateInfo(data) {
    const url = `/user-info-fast/`;
    return axiosClient.put(url, data);
  },
  updateUser(data) {
    const url = `/user-fast/`;
    return axiosClient.put(url, data);
  },
  getUserRequests(id) {
    const url = `/student-request?id=${id}`;
    return axiosClient.get(url);
  },
  createUserRequests(data) {
    const url = `/student-request/`;
    return axiosClient.post(url, data);
  },
  registerSchedule(data) {
    const url = `/register-schedule/`;
    return axiosClient.post(url, data);
  },
  changePassword(data) {
    const url = `/change-password/`;
    return axiosClient.post(url, data);
  },
};

export default usersApi;
