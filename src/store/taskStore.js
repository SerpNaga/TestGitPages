const taskState = {tasks:
    [{id:1, name:"Hello", checked:false},
    {id:2, name:"hi", checked:true},
    {id:3, name:"bye", checked:false}]
}

export const taskReducer = (state=taskState, action)=>{
    switch(action.type){
        case "DEL":
            return {...state, tasks: state.tasks.filter((task)=> action.payload.id !== task.id)};
        case "ADD":
            if(state.tasks.length){var id = state.tasks[state.tasks.length-1].id+1}else{id=1}
            const newTask =  {id:id, name:action.payload.text, checked:action.payload.isDone}
            return {...state, tasks:[...state.tasks, newTask]}
        case "CHECK":
            return {...state, tasks: state.tasks.map((task)=> task.id === action.payload.id ? {...task, checked: !task.checked} : task)}
        default:
            return state;
    }
}