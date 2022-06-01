import {useState} from "react"
import {useDispatch} from 'react-redux'
import {addTaskAct} from "../store/store"
function AddTask(){
    const [text, setText] = useState("");
    const [isDone, setIsDone] = useState(false)
    const onSubmit=(e)=>{
        e.preventDefault();
        if(!text){alert("Please Add Task First")}else{addTask(text, isDone)};
        e.target[0].value=""
        e.target[1].checked=false
        setText("")
        setIsDone(false)
        }
    const dispatch = useDispatch()
    const addTask = (text, isDone)=> dispatch(addTaskAct(text, isDone))
    return(
        <form className="addTask" onSubmit={onSubmit}>
            <label>Task</label>
            <input  placeholder="Add task" type="text" onChange={(e)=>setText(e.target.value)}/>
            <label>Done?</label>
            <input  type="checkbox" onChange={(e)=>setIsDone(e.currentTarget.checked)}/>
            <input type="submit" value="Add Task"/>
        </form>
    )
}
export default AddTask