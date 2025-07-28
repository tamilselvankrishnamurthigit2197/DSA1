import { useReducer } from "react";

export default function UseReducer() {
    /* state hols the initialValue holds count : 0, dispatch renders the reducer function */
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <div style={{marginBottom: 10}}>
            <h3>Count: {state.count} </h3>
            <button onClick={()=> dispatch({type: 'increment'})}> + </button>
            <button onClick={()=> dispatch({type: 'decrement'})}> - </button>
        </div>
    )
}

/* declare a initialState like reducer function */
const initialState = {count: 0};

function reducer(state, action){
    switch (action.type) {
        case increment:
            return {count: state.count + 1}
        case decrement:
            return {count: state.count - 1}
            
        default:
            break;
    }
}