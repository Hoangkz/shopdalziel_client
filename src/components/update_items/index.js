import { createSlice } from "@reduxjs/toolkit"

const items = ""
export default createSlice({
    // name
    name: 'update_items',
    // biến khởi tạo
    initialState:{
        items:items
    },
    // các action thực hiện
    reducers:{
        update:(state, action)=>{
            state.items = action.payload.items
        }
    }
})