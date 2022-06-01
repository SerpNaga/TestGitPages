import {combineReducers, createStore} from "redux"
import {countReducer} from "./countStore.js"
import {taskReducer} from "./taskStore.js"

// COUNT STORE ACTIONS
export const incCountAct = (t)=> {return{type:"INCR", payload:t}}
export const decCountAct = (t)=> {return{type:"DECR", payload:t}}
export const incCapCountAct = (t, c)=> {return{type:"INCCAP", payload:{entr:t, caps:c}}}
export const decCapCountAct = (t, c)=> {return{type:"DECCAP", payload:{entr:t, caps:c}}}
// TASK STORE ACTIONS
export const addTaskAct = (text, isDone)=> {return{type:"ADD", payload:{text:text, isDone:isDone}}}
export const delTaskAct = (id)=> {return{type:"DEL", payload:{id:id}}}
export const checkTaskAct = (id)=> {return{type:"CHECK", payload:{id:id}}}



let store = createStore(combineReducers({countReducer, taskReducer}))

export default store