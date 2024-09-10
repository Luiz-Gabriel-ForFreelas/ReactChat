import './App.css'

import { useContext } from 'react'

import { ChatContext } from './context/chat'

import None from './components/None';

import Client from './components/Client';

import Consultant from './components/Consultant';


function App() {

  const [chatState, dispatch] = useContext(ChatContext);

  return (
    <div id='app'>
      {chatState.chatState === 'none' && <None/>}
      {chatState.chatState === 'client' && <Client/>}
      {chatState.chatState === 'consultant' && <Consultant/>}
    </div>
  )
}

export default App
