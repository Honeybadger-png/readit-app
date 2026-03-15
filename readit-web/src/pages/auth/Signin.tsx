const Signin = () => {

    const handleSubmit = (event:React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("submitted signin")
    }

    return(
        <div className="flex w-full h-screen justify-center items-center">
            <form action="POST" className="flex flex-col gap-6" onSubmit={(e)=> handleSubmit(e)}>
                <div className="flex">
                    <div className="w-40">
                        <label htmlFor="" className="text-2xl">Name</label>
                    </div>
                    <input type="text" className="border-2 text-2xl" />
                </div>
                <div className="flex">
                    <div className="w-40">
                        <label htmlFor="" className="text-2xl">e-mail</label>
                    </div>
                    <input type="text" className="border-2 text-2xl" />
                </div>
                <div className="flex">
                    <div className="w-40 ">
                        <label htmlFor="" className="text-2xl">password</label>
                    </div>
                    <input type="text" className="border-2 text-2xl"/>
                </div>
                <div className="flex">
                    <div className="w-40 ">
                        <label htmlFor="" className="text-2xl">Verification Password</label>
                    </div>
                    <input type="text" className="border-2 text-2xl"/>
                </div>
                <div className="flex">
                    <div className="w-40 ">
                        <a href="">Signin with Google</a>
                    </div>
                </div>
                
                <div>
                    <button className="border-2 px-4 py-2">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Signin;