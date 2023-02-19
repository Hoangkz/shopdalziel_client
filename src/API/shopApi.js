import axiosClient from "./axiosClient";
const shopApi = {
  // get Courses trending
  searchClient(query) {
    const url = `/items/searchClient?q=${query}`;
    return axiosClient.get(url);
  },
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