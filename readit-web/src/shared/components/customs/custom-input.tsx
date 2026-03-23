import { useState, type ComponentPropsWithoutRef } from "react";
import "./custom.css";

interface CustomInputProps extends ComponentPropsWithoutRef<'input'>{
    name:string,
    label: string,
    type:string,
    tabIndex:number,
}

const CustomInput = ({name,label,type = 'text',tabIndex, ...rest} : CustomInputProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPasswordType = type === 'password';
    const shouldAutoFocus = tabIndex === 1;

    const handlePasswordVis = () => {
        setShowPassword((state)=> !state);
    }

    return (
        <div className="input-group">
            <input {...rest} type={isPasswordType && showPassword ? 'text' : type} id={name} className="border-2 text-2xl" required placeholder=" "  maxLength={30} autoFocus={shouldAutoFocus} />
            <label htmlFor={name}> {label} </label>
            {
              type === 'password' ?  <p className="hover:cursor-pointer text-sm pt-2" onClick={handlePasswordVis}>{showPassword ? "Hide Password" : "Show Password"}</p> : null
            }
        </div>
    )
}

export default CustomInput;