
// this very very good tut is from 
// https://www.youtube.com/watch?v=RVFAyFWO4go
// please continue on it when you have time... 



import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About';
import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom';

import Tasks from './Tasks';
import AddTask from './components/AddTask';
import { useState,useEffect } from 'react';


const App =()=> {   // as arrow function
  // App level state
  const[showAddTask,setShowAddTask]=useState(true)
  const[tasks,setTask]=useState([])

//functions 
useEffect(()=>{
  const gettasks= async()=>{
  setTask(await fetchTasks())
  }
  gettasks()
}, [])

//fetch tasks

  const fetchTasks = async()=>{
    // fetch returns a promise
    const res=await fetch("http://localhost:5000/tasks").then((Response)=>Response.json())
    
    return(res)
  }
  


const addTask=async(task)=>{
  console.log(task)
  const data=await fetch('http://localhost:5000/tasks',{
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(task)
  }).then(Response=>Response.json())

  
  setTask([...tasks,data])

  // const id=Math.floor(Math.random()*10000+1)
  // let newTask={id,...task}
  // setTask([...tasks,newTask])
}

const deleteTask=async(id)=>{
  await fetch(`http://localhost:5000/tasks/${id}`,
  {
    method:'DELETE'
  }
  )

  setTask(tasks.filter((task)=>
    task.id!==id
  ))
}
// toggle reminder
const toggleReminder=async(id)=>{
  
    const taskToToggle=await fetch(`http://localhost:5000/tasks/${id}`).then(Response=>Response.json())
    const taskUpdt={...taskToToggle, reminder:!taskToToggle.reminder}
    

    const data=await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(taskUpdt)
    }).then(Response=>Response.json())

    
    
    
  setTask(tasks.map((task)=>task.id===id?{...task,reminder:data.reminder}:task))
  
}

// components

  return (
    <Router>
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      
      <Routes>
        <Route path='/' element={
          <>
          {!showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onReminder={toggleReminder}/>: 'No more tasks to show' }
          </>
        }/>
      <Route path='/about' element={<About />}/>
      </Routes>
      <Footer/> 
    </div>
    </Router>
  )
}

export default App;
