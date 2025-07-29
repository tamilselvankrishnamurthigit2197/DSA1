import { useState } from "react"

export default function ChatInput({chatMessages, setChatMessages}){

    const [inputText, setInputText] = useState('');

    function sendMessage(){
        /* user message save */
        const newChatMessage =[
            ...chatMessages,
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID(),
            },
        ]
        setChatMessages(newChatMessage)

        /* robot response save */
        const response = window.Chatbot.getResponse();

        setChatMessages([
            ...newChatMessage,
            {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID(),
            }
        ]);

        setInputText('')
    }
    return(
        <div className="chat-input-container">
            <input
                type="text"
                onChange={e => setInputText(e.target.value)}
                value={inputText}
                className="chat-input"
                placeholder="send message to chat bot"
             />

             <button className="send-button" onClick={sendMessage}> send</button>
        </div>
    )
}