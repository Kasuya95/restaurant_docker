import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import AddRestaurant from "../pages/AddRestaurant";
import Update from "../pages/Update";

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
    }
])

export default router;