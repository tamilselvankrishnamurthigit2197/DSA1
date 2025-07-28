import { useLayoutEffect, useState } from "react";

export default function UseLayOutEffectHook() {
    const [color, setColor] = useState('red');

    useLayoutEffect(()=>{
        document.body.style.backgroundColor = color
    },[color])

    return(
        <>
        <button onClick={()=>setColor( color === 'red' ? 'lightcoral' : 'red')}> Change The BG Color</button>
        </>
    )
}