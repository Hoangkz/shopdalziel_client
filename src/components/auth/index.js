import { createSlice } from "@reduxjs/toolkit"

export default createSlice({
    // name
    name: 'auth',
    // biến khởi tạo
    initialState:{
        checkLogin:false,
        user:null,
        token:"",
        refresh_token:""
    },
    // các action thực hiện
    reducers:{
        login:(state, action)=>{
            // xử lý trả dữ liệu
            // console.log(action)
            state.checkLogin = action.payload.checkLogin
            state.user = action.payload.user
            state.token = action.payload.token
            state.refresh_token = action.payload.refresh_token
        },
        logout:(state, action)=>{
            state.checkLogin = false
            state.user = null
            state.token = null
            state.refresh_token = null
        }
    }
})