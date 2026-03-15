import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import App from "../App";
import Login from "../pages/auth/Login";
import AuthLayout from "../pages/auth/AuthLayout";
import Signin from "../pages/auth/Signin";
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