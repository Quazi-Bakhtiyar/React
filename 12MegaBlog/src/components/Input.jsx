import React from 'react'
import { useId } from 'react'


const Input = React.forwardRef(function({
    label,
    type='text',
    className= '',
    ...props
}, Ref){
    const Id = useId()

    return (
        <div className='w-full'>
            {label && 
            <label className='mb-1 pl-1 inline-block'
            htmlFor={Id}
            >
                {label}
            </label>
            }
            <input type={type}
            id={Id}
            className={` px-3 py-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            {...props}
            ref={Ref}
            />
        </div>
    )
})

export default Input