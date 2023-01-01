import { useContext } from "react";
import TaskItem from "./taskItem";
import { AppContext } from "../App";

const TaskList = () => {
    const {taskList} = useContext(AppContext)

    return(
    <>
        {taskList.sort((a,b)=>{a-b}).map((task) => (
            <li className='flex justify-between p-4
            border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150
            '
            key={task.id}
            >
                <TaskItem
                    key={task.id}
                    eachTask = {task}
                />
                </li>
            ))}
    </>
    )
}

export default TaskList;