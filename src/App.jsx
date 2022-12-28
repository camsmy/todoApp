import { useState,useEffect } from 'react'
import header from './assets/light/bg-desktop-light.jpg'
import AddButton from "./components/button"
import Input from "./components/input"
import Checkbtn from './components/checkbtn'
import NoCircle from './components/noCirlce'
import TaskList from './components/taskList'

function App() {
//   const [todoList, setList] = useState([])
//   const [newTask,setNewtask] = useState("")
//   const [checkTask,setCheckTask] = useState(false)

//   const addNewTask = ()=>{
//     // let newList = [...todoList,newTask] 
//     // setList(prev=>{
//     //   return newList
//     // } )

//     const task = {
//         id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1,
//         taskName:newTask,
//         checks:checkTask
//     }
//     // console.log(todoList[(todoList.length-1)+1])

    

//     setList(prev=>{return [...todoList,task]})
//   }

//   const deleteTask =(id)=>{
//     // the code below returns the unwanted element in the array
//       //filter automatically removed the unwanted elements if they match as long as it returns false
//         // task !== taskName shortcut for if statement. If task !== taskname ? false : true
//       // setList(todoList.filter((task)=> task.id !== id))
//       const test = todoList.filter((task)=> task.id !== id)
//       console.log(test)
//   }

//   const doneTask = (id)=>{
//     const test = todoList.filter((task)=> task.id == id)
//     if(test[0].id === id){
//         setCheckTask(!checkTask)
//         console.log(checkTask)
//     }
//   }

//   // const listTry = () =>{
//   //   return(  <div className={task.checks?'text-xl' : 'text-xl text-slate-500 line-through'}>{task.taskName}</div>    )
//   // }

  // component logic
// const listItems = todoList.map((task)=>{
//   return(
//     <div className='flex justify-between p-4
//     border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150
//     ' key={task.id}>

//       <div className="inline-flex items-center space-x-2">
                    

//                     <div className={task.checks?'text-xl' : 'text-xl text-slate-500 line-through'}>{task.taskName}</div>  
//                     </div>

//                 <div onClick={()=>deleteTask(task.id)}>
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" className="w-5 h-5 text-slate-500 hover:text-slate-700 hover:cursor-pointer hover:stroke-red-700">
//                         <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
//                       </svg>                      
//                 </div>
//     </div>
//   )
// })



const [taskList, setTaskList] = useState([])


const addTask = (task)=>{
  setTaskList(prev=>[...prev,task])
}

  const deleteTask =(id)=>{
    // the code below returns the unwanted element in the array
      //filter automatically removed the unwanted elements if they match as long as it returns false
        // task !== taskName shortcut for if statement. If task !== taskname ? false : true
      // setList(todoList.filter((task)=> task.id !== id))
      setTaskList(prev=>prev.filter( task =>task.id!==id))
  }

  const checkTask = (id) =>{
    setTaskList(prev=>prev.map(task => task.id === id ? {...task, check:!task.check} : task))

  }

  return (
    <div className="App relative">
      <img src={header} alt="header img" className='object-fill h-72 w-screen'/>
      <div className='container mx-20 p-4 px-72 absolute inset-y-24 '>

        <div className='flex justify-start mb-6'>
          <h1 className='text-6xl text-very-light-gray bg-red'>T O D O</h1>
        </div>

        <div className="w-3/4 m-auto">
            <Input 
            placeholder="Enter a Task"
            addTask = {addTask}
            />
        </div>

        <div className='list flex justify-center my-20'>
          <ul className='w-3/4 bg-white rounded-lg p-6'>
            <p className="text-slate-500">

            {(taskList.length === 0)?
            "Hi, you have no task for today. Have a good day!"
            :"Hello, here are your latest tasks"
            }

              </p>
              <TaskList
              tasks = {taskList}
              deleteTask = {deleteTask}
              checkTask = {checkTask}
              />
          </ul>
        </div>

      </div>

    </div>
  )
}

export default App
