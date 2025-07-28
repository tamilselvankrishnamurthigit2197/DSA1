import { useRef } from "react"

export default function UseRefEx(){

    const inputRef = useRef();
    const handleFocus = () =>{
        inputRef.current.focus();
    }
    return(
        <>
        <h2> UseRef Form</h2>
        <input type="text" ref={inputRef} placeholder="click the button to get focus" name="" id="" />
        <button onClick={handleFocus}>Focus the Input</button>
        </>
    )
}