import { useState } from "react";
import DeleteButton from "./deleteButton";

const TaskItem = ({eachTask,deleteTask,checkTask}) =>{

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
                                {/* <label
                                htmlFor={task.id}
                                className={styles.label}
                                > */}
               
                    </div>

                    <div  className={ ischeck ? 'text-xl text-slate-500 line-through' : 'text-xl'}>
                        {eachTask.name}
                    </div>  

            </div>



            <div className="flex justify-between space-x-2">

                <div>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0EA5E9" className="w-5 h-5 text-slate-500 hover:text-slate-700 hover:cursor-pointer hover:stroke-sky-700">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
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