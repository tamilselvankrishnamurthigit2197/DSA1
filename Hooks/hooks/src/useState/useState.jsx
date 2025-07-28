import { useState } from "react"

export default function UseState(){
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = ()=>{
        setIsVisible(!isVisible);
    }

    return(
        <div>
            <button onClick={handleClick}>Show the text</button>
            {isVisible && <p>This is the text that gets toggled</p>}
        </div>
    )
}