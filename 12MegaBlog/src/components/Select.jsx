import React ,{useId} from 'react'

function Select({
    label,
    className = '',
    options,
    ...props
},ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label
        htmlFor={id}
        className=''>{label}</label>}

        <select className={`${className} px-3 py-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`}
        {...props}
        id = {id}
        ref={ref}>
        
            {options.map((option)=>(
                <option key={option} value={option}>
                    {option}
                </option>
            ))}

        </select>

    </div>
  )
}

export default React.forwardRef(Select)