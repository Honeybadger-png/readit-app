

const Navbar = () => {
    const isLoggedIn = true;

    return(
        <div className="w-full h-16 bg-red-500 flex items-center justify-between">
            <div className="bg-amber-50 ">
                navigation
            </div>
            <div>
                <input className="border-2 p-1 w-100" type="text" placeholder="...Search" />
            </div>
            <div className="pr-4">
                {
                    isLoggedIn ? (
                        <div className="flex gap-4">
                            <a className="hover:cursor-pointer" href="/login">
                                Login
                            </a>
                            <a className="hover:cursor-pointer" href="/signin">
                                SignIn
                            </a>
                        </div>
                    ) : (
                        <div>Profile</div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar
