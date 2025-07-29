function ChatMessage({sender, message}) {
    return(
        <div className={
            sender === 'user' 
            ? 'chat-message-user' 
            : 'chat-message-robot'
        }>
            {sender === 'robot' && (
                <img src="robot.png" className="chat-message-profile" alt="robot message" />
            )}

            <div className="chat-message-text"> {message}</div>

            {sender === 'user' && (
                <img src="user.png" className="chat-message-profile" alt=" user image" />
            )}
        </div>
    )
}
export default ChatMessage;