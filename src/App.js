import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import Login from './components/Login';

const App = () => {
    if(!localStorage.getItem('username')) return <Login />

  return (
    <ChatEngine 
        height = '100vh'
        projectID = "2d13174a-bd06-417a-afa1-fe332db9db99"
        userName = {localStorage.getItem('username')}
        userSecret = {localStorage.getItem('password')}   
        renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps} />} 
    />
  )
}

export default App