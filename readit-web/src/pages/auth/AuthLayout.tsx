import { Outlet } from "react-router"
import AuthNavbar from "../../components/auth-navbar"

const AuthLayout = () => {
    return(
        <div>
            <AuthNavbar />
            <Outlet />
        </div>
    )
}

export default AuthLayout