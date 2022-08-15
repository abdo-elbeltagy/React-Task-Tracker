import { useState } from "react"
const AddTask = ({onAdd}) => {
// adding component level state
  const[text,setTask]=useState('')
  const[day,setDay]=useState('')
  const[reminder,setReminder]=useState(false)

  const onSubmit=(e)=>{
    e.preventDefault()
    if(!text){
      alert('please insert a task')
      return
    }
    onAdd({text,day,reminder})
    setTask('')
    setDay('')  
    setReminder(false)
  }
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label >Task</label>
            <input type='text' placeholder="add Task"  onChange={(e)=>setTask(e.target.value)} value={text}/>
        </div>

        <div className="form-control">
            <label >Day & Time</label>
            <input type='text' placeholder="add Date" value={day} onChange={(e)=>setDay(e.target.value)}/>
        </div>

        <div className="form-control form-control-check" >
            <label >Set Reminder</label>
            <input type="checkbox" value={reminder} checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
            
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
    </form>

   
  )
}

export default AddTask