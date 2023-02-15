import Home from "./pages/home";
import Items from "./pages/items";
import Footer from "./layout/footer";

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
    },
]

const privateRoutes =[
    {
        path:"/home",
        element:Home,
    },
]
export {publicRoutes,privateRoutes }