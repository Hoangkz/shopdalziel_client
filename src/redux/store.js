// import { createStore } from "redux";
// import roothReducer from "./reducer"
// const store = createStore(roothReducer);
// export default store;

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        file
    }
})

export default store;
