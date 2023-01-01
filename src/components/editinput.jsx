import { useState,React,useContext } from "react";
import { AppContext } from "../App";
import {InputComponent} from "./inputComponent"

const EditInput = ()=>{

        const {editedTask,updateTask,setEditing} = useContext(AppContext)

        // gets the current value of the edit input
        const [updatedTask,setUpdatedTask] = useState(editedTask.name)

        // passes the new value of task to the global function updatetask 
        // editedtask is the object handler that handles the current task being edited, also holds the previous value of the task
        const handleFormSubmit = (e) =>{
               e.preventDefault()
               updateTask({...editedTask,name:updatedTask})
               setEditing(false)
        }

        return(
        <div className="">
                <form
                        action=""
                        onSubmit={handleFormSubmit}
                        className="flex space-x-2"
                >
                        
                     <InputComponent
                     id={editedTask.id}
                     value={updatedTask}
                     onInput={(e)=>setUpdatedTask(e.target.value)}
                     placeholder="Updated task"
                     />

                     <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg> 
                    </button>
                </form>
        </div>
    )};

export default EditInput;