import { useEffect, useRef } from "react"
import ChatMessage from "./ChatM"

export default function ChatMessages({chatMessages}){

    const chatMessageRef = useRef(null);

    useEffect(()=>{
        const containerElem = chatMessageRef.current;
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    },[chatMessages])
    
    return(
        <div 
        ref={chatMessageRef}
        className="chat-messages-container">
            {
                chatMessages.map((chatMessage)=>{
                    return(
                        <ChatMessage
                            message={chatMessage.message}
                            sender={chatMessage.sender}
                            key={chatMessage.id}
                        />
                    )
                })
            }
        </div>
    )
}