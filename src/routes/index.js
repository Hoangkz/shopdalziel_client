import Home from "../pages/home";
import Items from "../pages/items";
import Listitem from "../pages/List-items";
import Search from "../pages/search";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Filters from "../components/Filters";
import Todo from "../components/Todo";
import TodoList from "../components/TodoList";

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
    {
        path:"/test/filters/",
        element:Filters,
    },
    {
        path:"/test/Todo",
        element:Todo,
    },
    {
        path:"/test/TodoList",
        element:TodoList,
    },
]

const privateRoutes =[
    {
        path:"/home",
        element:Home,
    },
]
export { publicRoutes, privateRoutes }