import { useState,React } from "react";

const EditInput = ({editedTask,updateTask,setEditing})=>{

        const [updatedTask,setUpdatedTask] = useState(editedTask.name)

        const handleFormSubmit = (e) =>{
               e.preventDefault()
        //        console.log(updatedTask)
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
                    <input
                        className='text-2xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
                        type="text"
                        id={editedTask.id}
                        value={updatedTask}
                        onInput={(e)=>setUpdatedTask(e.target.value)}
                        placeholder="Updated task"
                        required
                        autoFocus
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