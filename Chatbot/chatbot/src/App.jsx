import { useState } from 'react'
import './App.css'
import './components/style.css'
import ChatInput from './components/ChatInput'
import ChatMessages from './components/ChatMessage'

function App() {
  
  const [chatMessages, setChatMessages] = useState([
    {
      message: 'hello buddy',
      sender: 'user',
      id: 'id1',
    },
    {
      message: 'Hello!, how can i help you ?',
      sender: 'robot',
      id: 'id2',
    },
    {
      message: 'can you give me today"s date',
      sender: 'user',
      id: 'id3',
    },
    {
      message: 'today date is 29/07/2025',
      sender: 'robot',
      id: 'id4',
    }
  ])
  return(
    <>
    <div className='app-container'>
      <h3>Chat Bot in React</h3>

      <ChatMessages 
        chatMessages={chatMessages}
      />

      {/* chat input */}
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
    </>
  )
}

export default App
