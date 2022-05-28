import {useState} from 'react'


const AddTasks = ({onAdd})=>{
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
	e.preventDefault()
	
	if (!text){
	    alert('please add task')
	    return
	}

	onAdd({text, date, time, reminder})
	setText('')
	setDate('')
	setTime('')
	setReminder(false)
    }
    
    return (
	    <form className='add-form' onSubmit={onSubmit}>
	    <div className='form-control'>
	    <label>Task</label>
	    <input type='text' placeHolder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
	    </div>
	    <div className='form-control'>
	    <label>Date</label>
	    <input type='text' placeHolder='Add Task' value={date} onChange={(e) => setDate(e.target.value)}/>
	    </div>
	    <div className='form-control'>
	    <label>Time</label>
	    <input type='text' placeHolder='Add Task' value={time} onChange={(e) => setTime(e.target.value)}/>
	    </div>
	    <div className='form-control form-control-check'>
	    <label>Set Reminder</label>
	    <input type='checkbox' value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
	    </div>
	    <input className='btn btn-block' type='submit' value='Save Task'/>
	    </form>
    )
}
export default AddTasks
