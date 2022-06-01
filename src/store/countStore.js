const countState = {
    count:0
}

export const countReducer = (state=countState, action)=>{
    switch(action.type){
        case "INCR":
            return {...state, count: state.count + action.payload};
        case "DECR":
            return {...state, count: state.count - action.payload};
        case "INCCAP":
            if((state.count + action.payload.entr)<=action.payload.caps){return {...state, count: state.count + action.payload.entr}}else{return {...state, count: action.payload.caps}};
        case "DECCAP":
            if((state.count - action.payload.entr)>=action.payload.caps){return {...state, count: state.count - action.payload.entr}}else{return {...state, count: action.payload.caps}};
        default:
            return state;
    }
}