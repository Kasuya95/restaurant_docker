import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import AddRestaurant from "../pages/AddRestaurant";
import Update from "../pages/Update";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home />
    },
    {
        path:"/AddRestaurant",
        element:<AddRestaurant />
    },
    {
        path:"/Update/:id",
        element:<Update />
    },
    {
        path:"/Signup",
        element:<Signup />
    },
    {
        path:"/Signin",
        element:<Signin />
    }
])

export default router;