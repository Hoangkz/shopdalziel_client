import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../API/authApi";
import usersApi from "../API/usersApi";
import { toast } from "react-toastify";

export const login = createAsyncThunk("user-login", async (payload) => {
  try {
    //  call API to login
    const data = await authApi.login(payload);
    // set user to localstorage
    localStorage.setItem("user", JSON.stringify(data.user));
    toast.success("Đăng nhập thành công", {
      position: toast.POSITION.TOP_CENTER,
    });
    // return userdata to thunk
    return data.user;
  } catch (error) {
    toast.error(error.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
});
export const updateUserInfo = createAsyncThunk(
  "user-update",
  async (payload) => {
    try {
      //  call API to update user info
      const data = await usersApi.updateUser(payload);
      // set user to localstorage
      localStorage.setItem("user", JSON.stringify(data.data.data));
      localStorage.setItem("limitList", JSON.stringify(10));
      return data.data.data;
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }
);
export const logout2 = () => ({
  type: 'LOGOUT',
});
export const userSlice = createSlice({
  name: "user",
  initialState: {
    curent: JSON.parse(localStorage.getItem("user")) || {},
    setting: {
      limitList: JSON.parse(localStorage.getItem("limitList")) || 10,
    },
    isLogined: JSON.parse(localStorage.getItem("user") || false),
  },
  reducers: {
    logout(state) {
      toast.success("Đăng xuất thành công", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(state);
      localStorage.removeItem("user");
      state.curent = {};
    },
    changeSetting(state, action) {
      if (action.payload?.limitList) {
        localStorage.setItem("limitList", action.payload.limitList);
      }
      state.setting = { ...state.setting, ...action.payload };
    },
  },
  extraReducers: {
    [updateUserInfo.fulfilled]: (state, action) => {
      if (action.payload) {
        state.curent = action.payload;
      }
    },
    [login.fulfilled]: (state, action) => {
      console.log(action);
      if (action.payload) {
        state.curent = action.payload;
        state.isLogined = true;
      } else {
        state.isLogined = false;
      }
    },
  },
});
const { actions, reducer } = userSlice;
export const { logout } = actions;
export const { changeSetting } = actions;
export default reducer;
