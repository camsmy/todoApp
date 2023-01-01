import { useState,useEffect,createContext } from 'react'
import HeaderLight from './assets/light/bg-desktop-light.jpg'
import HeaderDark from './assets/dark/bg-desktop-dark.jpg'
import Input from "./components/input"
import EditInput from "./components/editinput"
import TaskList from './components/taskList'
import Moon from './assets/icon-moon.svg'
import Sun from './assets/icon-sun.svg'

export let AppContext = createContext()

function App() {

const [taskList, setTaskList] = useState([]) //global tasklist
const [editedTask,setEditedTask] = useState(null) //holds the task that is currently being edited
const [editing,setEditing] = useState(false) //state for opening and closing the edit modal
const [themeToggle, setThemeToggle] = useState(true)

useEffect(()=>{
  themeToggle?
  document.body.style.backgroundColor = "hsl(233, 11%, 84%)"
  : document.body.style.backgroundColor = "hsl(235, 19%, 35%)"
},[themeToggle])

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
    setTaskList(prev=>prev.map(task => task.id === id ? {check:!task.check,...task} : task))
  }

  // updates the global taskList that a task has been edited
  const updateTask = (task)=>{
    setTaskList(prev=>prev.map(t => 
      t.id === task.id
       ? {...t,name:task.name} : t))
  }

    const enterEditMode = (task) =>{
          setEditedTask(task)
          setEditing(true)
    }

  return (
    <div className="App">
      <AppContext.Provider value={{addTask,taskList,deleteTask,checkTask,enterEditMode,editedTask,updateTask,setEditing}}>
      <div className='relative flex items-center justify-center'>

      { themeToggle ?
        (<img src={HeaderLight} alt="header img" className='object-cover h-64 w-full md:h-72'/>)
        :(<img src={HeaderDark} alt="header img" className='object-cover h-64 w-full md:h-72'/>)
      }

      <div className='absolute inset-y-16 px-3 md:inset-y-16 md:w-10/12 lg:w-2/4'>

        <div className='flex pb-2 justify-between'>
          <h1 className='text-2xl font-bold text-very-light-gray md:text-5xl '>T O D O</h1>
          <button onClick={()=>setThemeToggle(!themeToggle)} className="px-5">
            { themeToggle ? (
                <img src={Sun} alt="sun svg"/>
            ) :
            (
              <img src={Moon} alt="moon svg"/>
            )
            }
          </button>
        </div>

        <div className="">

            {/* if editing is true then show the contents, else do nothing */}

            { editing && (
              <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">               
                {/*body*/}

                <div className="flex items-center justify-end">
                  
                    <button onClick={()=>setEditing(false)}
                    className=" text-zinc-900 font-bold uppercase text-sm px-2 py-2 rounded hover:ease-linear outline-none focus:outline-none transition-all duration-150"
                    type="button">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>

                </div>

                <div className="relative p-6 pt-2 flex-auto">
                 <EditInput/>
                </div>
                {/*footer*/}
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
            )

            }

            <Input 
            placeholder="Enter a Task"
            />
        </div>

        <div className='list flex justify-center my-16'>
          <ul className=' w-full bg-white rounded-lg p-6'>
            <p className="text-slate-500">

            {taskList.length === 0 ?
            "Hi, you have no task for today. Have a good day!"
            :"Hello, here are your latest tasks"
            }

              </p>

              <TaskList/>
          </ul>
        </div>

      </div>

      </div>
      </AppContext.Provider>
    </div>
  )
}

export default App
