import axiosClient from "./axiosClient";
const shopApi = {
  // get Courses trending
  search(query) {
    const url = `/items/search?q=${query}`;
    return axiosClient.get(url);
  }
};

export default shopApi;