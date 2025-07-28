import { useEffect, useRef, useState } from "react";

export default function StorePrevRef() {

    const [count, setCount] = useState(0);

    const prevCountRef = useRef();

    useEffect(()=>{
        /* updates ref after every render */
        prevCountRef.current = count;
    },[count]);

    return(
        <div>
            <h2> Current: {count} </h2>

            <h4> previousValue: {prevCountRef.current} </h4>

            <button onClick={()=> setCount(c => c + 1)}> + </button>
        </div>
    )
}