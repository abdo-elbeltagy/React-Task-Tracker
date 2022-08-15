
import Task from "./components/Task"

const Tasks = ({tasks,onDelete,onReminder}) => {
    
  return (
    <>
    {
        tasks.map ((task)=>
           (<Task  key={task.id} task={task} onDelete={onDelete} onReminder={onReminder}/>) 
        )
    }
    
    </>
  )
}

export default Tasks