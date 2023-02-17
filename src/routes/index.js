import Home from "../pages/home";
import Items from "../pages/items";
import Footer from "../layout/footer";
import Listitem from "../pages/List-items";
import Search from "../pages/search";

const publicRoutes =[
    {
        path:"/",
        element:Home,
    },
    {
        path:"/items/:slug",
        element:Items,
    },
    {
        path:"/footer",
        element:Footer,
    },
    {
        path:"/list-items/:slug",
        element:Listitem,
    },
    {
        path:"/search",
        element:Search,
    },
]

const privateRoutes =[
    {
        path:"/home",
        element:Home,
    },
]
export { publicRoutes, privateRoutes }