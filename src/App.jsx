import { useState,createRef } from 'react'
import header from './assets/light/bg-desktop-light.jpg'
import AddButton from "./components/button"
import Input from "./components/input"

function App() {
  const [todoList, setList] = useState([])
  const [newTask,setNewtask] = useState("")
  const ref = createRef(null)

  const addNewTask = ()=>{
    // let newList = [...todoList,newTask] 
    // setList(prev=>{
    //   return newList
    // } )
    if(ref.current.value.length === 0){
      ref.current.placeholder="Enter a valid input"
      return 0
    }else{
      ref.current.placeholder="Enter a task"
    }

    const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1,
        taskName:newTask
    }
    // console.log(todoList[(todoList.length-1)+1])

    setList(prev=>{return [...todoList,task]})
    ref.current.value=''
  }

  const deleteTask =(id)=>{
    // the code below returns the unwanted element in the array
      //filter automatically removed the unwanted elements if they match as long as it returns false
        // task !== taskName shortcut for if statement. If task !== taskname ? false : true
      setList(todoList.filter((task)=> task.id !== id))
  }

  // component logic
const listItems = todoList.map((task)=>{
  return(
    <div className='flex justify-between p-4' key={task.id}>
      <li className='text-xl'>{task.taskName}</li>
      <AddButton onClick={()=>deleteTask(task.id)} NameofButton="Remove"/>
    </div>
  )
})

  return (
    <div className="App relative ">
      <img src={header} alt="header img" className='object-fill h-72 w-screen'/>
      <div className='container mx-20 p-4 px-72 absolute inset-y-24 '>

        <div className='flex justify-start mb-6'>
          <h1 className='text-6xl text-very-light-gray bg-red'>T O D O</h1>
        </div>

        <div className="flex justify-center">
          {/* <input className='text-2xl shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
            type="text" 
            ref={ref}
            placeholder="Enter a task"
            onChange={(event)=>{setNewtask(prev=>{return event.target.value})}}
            /> */}

            <Input 
            onChange={(event)=>{setNewtask(prev=>{return event.target.value})}}
            placeholder="Enter a Task"
            ref={ref}
            />

            <AddButton 
            onClick={addNewTask}
            NameofButton="Add"
            />

        </div>

        <div className='list flex justify-center my-20'>
          <ul className='w-3/4 bg-white rounded-lg'>
              {listItems}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default App
