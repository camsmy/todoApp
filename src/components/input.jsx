import { useContext } from "react";
import { useState,React } from "react";
import {AppContext} from '../App'
const Input = (props)=>{
        const {addTask} = useContext(AppContext)
        const [task,setTask] = useState("")

        const handleFormSubmit = (e) =>{
                e.preventDefault()
                addTask({
                        name:task,
                        check:false,
                        id:Date.now()
                })
                setTask("")
        }

        return(
        <form 
                action=""
                onSubmit={handleFormSubmit}
        >                
            <input
                className='text-2xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
                type="text"
                id={task}
                value={task}
                onInput={(e)=>setTask(e.target.value)} 
                placeholder={props.placeholder}
                required
                autoFocus
             />
        </form>
    )};

export default Input;