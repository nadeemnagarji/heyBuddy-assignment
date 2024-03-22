import React, {useId} from 'react'

function Select({
    options,
    defaultValue,
    className,
    handleChange,
    ...props
}, ref) {
    const id = useId()
   


  return (  
        <select
        {...props}
        id={id}
        ref={ref}
        onChange={handleChange}
        className={`px-3 h-[60px] py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full dropdown-menu  ${className}`}
        >
            <option key={defaultValue}  defaultValue={defaultValue} > {defaultValue} </option>
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    
  )
}

export default React.forwardRef(Select)