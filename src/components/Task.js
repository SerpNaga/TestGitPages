import {FaCheck, FaTimes, FaTrash} from "react-icons/fa"
import {useDispatch} from 'react-redux'
import {checkTaskAct, delTaskAct} from "../store/store"

// function Task({task, deleteTask, toggleTask}){
//     return(
//         <div className="task" style={task.checked? {borderColor:"green"}:{borderColor:"red"}}>
//             <p>{task.name}</p> <div className="icons"><FaCheck display={task.checked ? "none" : "inline"} onClick={()=>toggleTask(task.id)}/> <FaTimes  display={task.checked ? "inline" : "none"} onClick={()=>toggleTask(task.id)}/> <FaTrash  onClick={()=>deleteTask(task.id)}/></div>
//         </div>
//     )
// }
function Task({task:{name, checked, id}}){
    const dispatch = useDispatch()

    const deleteTask = (id)=> dispatch(delTaskAct(id))
    const checkTask = (id)=> dispatch(checkTaskAct(id))
    return(
        <div className="task" style={checked? {borderColor:"var(--accentColor)"}:{borderColor:"var(--accentColor1)"}}>
            <p>{name}</p> <div className="icons"><FaCheck display={checked ? "none" : "inline"} onClick={()=>checkTask(id)}/> <FaTimes  display={checked ? "inline" : "none"} onClick={()=>checkTask(id)}/> <FaTrash  onClick={()=>deleteTask(id)}/></div>
        </div>
    )
}
export default Task