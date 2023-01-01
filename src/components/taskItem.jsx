import { useState,useContext } from "react";
import { AppContext } from "../App";
import DeleteButton from "./deleteButton";

const TaskItem = ({eachTask}) =>{

    const {deleteTask,checkTask,enterEditMode} = useContext(AppContext)

    const [ischeck, setcheck] = useState(eachTask.check)

    const checkChange = () =>{
        setcheck(!ischeck)
        checkTask(eachTask.id)
    }

    return(

            <>
            <div className="inline-flex items-center space-x-2">
                    <div onClick={()=>checkTask(eachTask.id)}>
                        <input
                                type="checkbox"
                                checked={ischeck}
                                onChange={checkChange}
                                name={eachTask.name}
                                id={eachTask.id}
                                />
                    </div>

                    <div  className={ ischeck ? 'text-xl text-slate-500 line-through' : 'text-xl'}>
                        {eachTask.name}
                    </div>  

            </div>



            <div className="flex justify-between space-x-2">

                <div onClick={()=>enterEditMode(eachTask)}>
                    <svg className="w-6 h-6 text-slate-500 hover:text-slate-700 hover:cursor-pointer hover:stroke-sky-700" fill="none" stroke="#0EA5E9" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                </div>


                <div onClick={()=>deleteTask(eachTask.id)}>
                    <DeleteButton
                    />                   

                </div>


            </div>


            </>
            
 
    )
}

export default TaskItem;