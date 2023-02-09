import axiosClient from "./axiosClient";
const shopApi = {
  // get Courses trending
  search() {
    const url = "danhsachItem/danhsachItem/items";
    return axiosClient.get(url);
  }
};

export default shopApi;