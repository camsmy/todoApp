import React from "react";
const Button = (props) =>{
    return(
        <button 
        type="button" 
        onClick={props.onClick}
        className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w- transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
        {props.NameofButton}
        </button>
    )
}

export default Button;