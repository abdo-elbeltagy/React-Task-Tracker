import {FaTimesCircle,FaBolt} from 'react-icons/fa'
const Task = ({task,onDelete,onReminder}) => {
  return (
    <div  className={`task ${task.reminder?'reminder':''}`} onDoubleClick={()=>onReminder(task.id)}>
        <h3 >{task.text}
        <FaTimesCircle className='example' style={{color:'red', cursor:'pointer'}} onClick={()=>onDelete(task.id)} onDoubleClick={()=>onReminder(task.id)}/>
        <FaBolt className='example' style={{color:'red', cursor:'pointer'}}/>
        </h3>
        <p>{task.day}</p>
        
        
        
        </div>
  )
}

export default Task