import { createSlice } from "@reduxjs/toolkit"

const token = (localStorage.getItem("token")||localStorage.getItem("token")==="null"||localStorage.getItem("token")==="undefined")?null : localStorage.getItem("token")
const refresh_token = (localStorage.getItem("refresh_token")||localStorage.getItem("refresh_token")==="null"||localStorage.getItem("refresh_token")==="undefined")?null : localStorage.getItem("refresh_token")
const user = (localStorage.getItem("user")||localStorage.getItem("user")==="null"||localStorage.getItem("user")==="undefined")?null : localStorage.getItem("user")
let checkLogin = false
if(token&&refresh_token&&user){
    checkLogin = true
}


export default createSlice({
    // name
    name: 'auth',
    // biến khởi tạo
    initialState:{
        checkLogin:checkLogin,
        user:user,
        token:token,
        refresh_token:refresh_token
    },
    // các action thực hiện
    reducers:{
        
        login:(state, action)=>{
            // xử lý trả dữ liệu
            console.log(action)
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