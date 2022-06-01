import Task from './Task';
import {useSelector} from 'react-redux'

function Tasks(){
    const tasks = useSelector((state)=>state.taskReducer.tasks)
    return(
        <div className="tasks">
            {tasks.length > 0? tasks.map((el)=><Task task={el} key={el.id}/>): <p>No Tasks</p>}
        </div>
    )
}
export default Tasks