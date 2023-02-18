import Home from "../pages/home";
import Items from "../pages/items";
import Listitem from "../pages/List-items";
import Search from "../pages/search";
import Login from "../layout/auth/Login";
import SignUp from "../layout/auth/SignUp";

const publicRoutes =[
    //thêm layout để có layout riêng
    {
        path:"/",
        element:Home,
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
]

const privateRoutes =[
    {
        path:"/home",
        element:Home,
    },
]
export { publicRoutes, privateRoutes }