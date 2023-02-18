import { createStore } from "redux";
import roothReducer from "./reducer"
const store = createStore(roothReducer);
export default store;