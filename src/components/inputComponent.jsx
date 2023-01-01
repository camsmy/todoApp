import { React } from "react";

export const InputComponent = (props) =>{
    return(
        <input
            className='text-2xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
            type="text"
            id={props.id}
            value={props.value}
            onInput={props.onInput}
            placeholder={props.placeholder}
            maxLength="20"
            required
            autoFocus
        />
    )
}

