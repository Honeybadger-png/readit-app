import { createBrowserRouter } from "react-router";
import Home from "../Home";
import App from "../../App";
import Login from "../../features/auth/pages/Login";
import Signin from "../../features/auth/pages/Signin";
import AuthLayout from "../../features/auth/pages/AuthLayout";
export const mainRoutes = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signin",
                element: <Signin />
            },
        ]
    },
    {
        path: "/",
        element: <App />,
        children: [
            { 
                index: true,
                element: <Home />,
            },
        ]
    },
])