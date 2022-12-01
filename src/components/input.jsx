import {React,forwardRef} from "react"

const Input = forwardRef((props,ref)=>(
    <input className='text-2xl shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
            type="text"
            ref={ref} 
            placeholder={props.placeholder}
            onChange={props.onChange}
            />
    )
 );

export default Input;