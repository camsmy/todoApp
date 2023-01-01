import { useState,React,useContext } from "react";
import {AppContext} from '../App'
import { InputComponent } from "./inputComponent";
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
             <InputComponent
             id={task}
             value={task}
             onInput={(e)=>setTask(e.target.value)} 
             placeholder={props.placeholder}
             />
        </form>
    )};

export default Input;