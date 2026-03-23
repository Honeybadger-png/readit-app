import { useState } from "react"
import CustomInput from "../../../shared/components/customs/custom-input";


const Login = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const handleSubmit = (event:React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(import.meta.env.VITE_NODE_ENV === 'development'){
            console.log(`submitted! email: ${email} password: ${password}`)
        }
    }

    return(
        <div className="flex w-full h-screen justify-center items-center">
            <form action="POST" className="flex flex-col gap-6" onSubmit={(e)=> handleSubmit(e)}>

                <CustomInput label="Email" name="email" type="text" tabIndex={1} onChange={(e)=> setEmail(e.target.value)} ></CustomInput>
                <CustomInput label="Password" name="password" type="password" tabIndex={2} onChange={(e)=> setPassword(e.target.value)}></CustomInput>
                <div className="flex">
                    <div className="w-40 ">
                        <a href="" tabIndex={4}>Signin with Google</a>
                    </div>
                </div>
                
                <div>
                    <button className="border-2 px-4 py-2 focus:text-red-600" tabIndex={3}>Login</button>
                </div>
            </form>
        </div>
    )

}

export default Login