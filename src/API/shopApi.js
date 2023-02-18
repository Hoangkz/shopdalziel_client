import axiosClient from "./axiosClient";
const shopApi = {
  // get Courses trending
  search(query,page) {
    const url = `/items/search?q=${query}&page=${page}`;
    return axiosClient.get(url);
  },
  home(page){
    const url = `?page=${page}`;
    return axiosClient.get(url);
  },
  loaiItems(slug,page){
    const url = `/items/${slug}/show?page=${page}`;
    return axiosClient.get(url);
  },
  showItems(slug){
    const url = `/items/${slug}`;
    return axiosClient.get(url);
  }
};

export default shopApi;