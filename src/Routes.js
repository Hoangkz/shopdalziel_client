import Home from "./pages/home";
import Items from "./pages/items";

const publicRoutes =[
    {
        path:"/",
        component:Home,
    },
    {
        path:"/items",
        component:Items,
    },
]

const privateRoutes =[
    {
        path:"/home",
        component:Home,
    },
]
export {publicRoutes,privateRoutes }