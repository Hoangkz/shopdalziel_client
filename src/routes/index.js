import Home from "../pages/home";
import Items from "../pages/items";
import Listitem from "../pages/List-items";
import Search from "../pages/search";
import Login from "../pages/auth/Login";
import User from "../pages/auth/User";
import SignUp from "../pages/auth/SignUp";
import TodoList from "../components/V-Test";
import FormLogin from "../API/FormLogin";
import ListUser from "../pages/List-user";
import Forbidden from "../layout/default/Forbidden";
import UserUpdate from "../pages/users/update";

const publicRoutes =[
    //thêm layout để có layout riêng
    {
        path:"/",
        element:Home,
    },
    {
        path:"/forbidden",
        element:Forbidden,
        layout:null,
    },
    
    {
        path:"/auth/user",
        element:User,
    },
    {
        path:"/items/:slug",
        element:Items,
    },
    {
        path:"/list-items/:slug",
        element:Listitem,
    },
    {
        path:"/search/",
        element:Search,
    },
    {
        path:"/auth/signup",
        element:SignUp,
        layout:null,
    },
    {
        path:"/auth/login",
        element:Login,
        layout:null,
    },
    {
        path:"/test",
        element:TodoList,
    },
    {
        path:"/testLogin",
        element:FormLogin,
    },
]

const privateRoutes =[
    {
        path:"/user/update/:slug",
        element:UserUpdate,
    },
    {
        path:"/admin/list-user",
        element:ListUser,
    },
]
export { publicRoutes, privateRoutes }