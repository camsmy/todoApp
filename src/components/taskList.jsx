import { useEffect,useState } from "react";
import TaskItem from "./taskItem";
import DeleteButton from "./deleteButton"

const TaskList = ({tasks,deleteTask,checkTask,enterEditMode}) => {
    return(
    <>
    {tasks.sort((a,b)=>{a-b}).map((task) => (
        <div className='flex justify-between p-4
        border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150
        '>
            
            <TaskItem
                key={task.id}
                eachTask = {task}
                deleteTask = {deleteTask}
                checkTask = {checkTask}
                enterEditMode = {enterEditMode}
            />

            </div>
        ))}
        </>
    )
}

export default TaskList;