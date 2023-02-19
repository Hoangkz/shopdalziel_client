import { createSlice } from "@reduxjs/toolkit"

export default createSlice({
    // name
    name: 'filters',
    // biến khởi tạo
    initialState:{
        search:"",
        status:"All",
        priorities:[]
    },
    // các action thực hiện
    reducers:{
        searchFilterChange:(state, action)=>{
            // xử lý trả dữ liệu
            state.search = action.payload
        },
        statusFilterChange:(state, action)=>{
            // xử lý trả dữ liệu
            state.status = action.payload
        },
        prioritiesFilterChange:(state, action)=>{
            // xử lý trả dữ liệu
            state.priorities = action.payload
        },
    }
})