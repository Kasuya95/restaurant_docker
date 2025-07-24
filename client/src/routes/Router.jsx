import { createBrowserRouter } from "react-router";

import AddRestaurant from '../pages/AddRestaurant'
import Home from '../pages/Home'
import Update from '../pages/Update'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/update/:id",
        element: <Update />
    },
    {
        path: "/add",
        element: <AddRestaurant />
    }
])

export default router