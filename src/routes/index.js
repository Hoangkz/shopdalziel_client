import Home from "../pages/home";
import Items from "../pages/items";
import Listitem from "../pages/List-items";
import Search from "../pages/search";
import Login from "../pages/auth/Login";
import User from "../pages/auth/User";
import SignUp from "../pages/auth/SignUp";
import TodoList from "../components/V-Test";
import FormLogin from "../API/FormLogin";

const publicRoutes =[
    //thêm layout để có layout riêng
    {
        path:"/",
        element:Home,
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
        path:"/home",
        element:Home,
    },
]
export { publicRoutes, privateRoutes }