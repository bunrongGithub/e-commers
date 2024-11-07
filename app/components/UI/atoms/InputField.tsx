import React, { ReactNode } from 'react'
interface IIputFieldProps{
    component?: ReactNode;
    buttonTitle?: string;
    placholder?:string;
    className?: string;
}
const InputField:React.FC<IIputFieldProps> = ({component,buttonTitle,placholder,className}) => {
    return (
        <div className='flex items-center bg-white rounded-md w-auto border'>
            <input
                className='bg-transparent rounded-l-md px-4 outline-none w-full'
                type="text"
                placeholder={placholder}
            />
            <button className={` ${className} bg-[#FB2E86] text-white px-4 py-3 rounded-r-md`}>
                {component ? component : buttonTitle}
            </button>
        </div>
    )
}

export default InputField