import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import AddRestaurant from "../pages/AddRestaurant";
import Update from "../pages/Update";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import AdminPage from "../pages/AdminPage";
import NotAllowed from "../pages/NotAllowed";
import AdminandModerator from "../pages/AdminandModerator";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home />
    },
    {
        path:"/AddRestaurant",
        element:
        (<AdminPage>
            <AddRestaurant />
            </AdminPage>
        ),
    },
    {
        path:"/Update/:id",
        element:
        (<AdminandModerator>
            <Update />
            </AdminandModerator>),
    },
    {
        path:"/Signup",
        element:<Signup />
    },
    {
        path:"/Signin",
        element:<Signin />
    },
    {
        path:"/NotAllowed",
        element:<NotAllowed />
    },
    {
        path:"/Profile",
        element:<Profile />
    }
])

export default router;