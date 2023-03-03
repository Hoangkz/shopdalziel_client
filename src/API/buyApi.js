import axiosClient from "./axiosClient";
const buyApi = {
  Cart_Items(data) {
    const url = `/buys/cart-items`;
    return axiosClient.post(url,data);
  },
};

export default buyApi;