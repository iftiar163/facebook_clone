import { createBrowserRouter } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Home/>
    },
    {
        path : "/auth",
        element : <Auth/>
    }
]);

export default router;