import axiosClient from "./axiosClient";
const shopApi = {
  // get Courses trending
  search() {
    const url = "/items/search?q=b";
    return axiosClient.get(url);
  }
};

export default shopApi;