import Home from "../pages/home";
import Items from "../pages/items";
import Footer from "../layout/footer";
import Listitem from "../pages/List-items";

const publicRoutes =[
    {
        path:"/",
        element:Home,
    },
    {
        path:"/items",
        element:Items,
    },
    {
        path:"/footer",
        element:Footer,
    },{
        path:"/list-items/:slug",
        element:Listitem,
    },
]

const privateRoutes =[
    {
        path:"/home",
        element:Home,
    },
]
export { publicRoutes, privateRoutes }