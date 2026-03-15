
const AuthNavbar = () => {
    return (
        <div className="w-full h-16 bg-amber-300 flex justify-between items-center">
            <div className="pl-10">
                <a href="/">Home</a>
            </div>
            <div className="flex gap-4 pr-10">
                <a href="/login">Login</a>
                <a href="/signin">Signin</a>
            </div>
        </div>
    )
}

export default AuthNavbar