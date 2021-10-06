import { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:5005');

export default function Conversation() {

  // repo example
  const [message, setMessage] = useState('');

  const [lovepiece, setLovepiece] = useState('');
  const [iniciator, setIniciator] = useState('');
  const [counterpart, setCounterpart] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [payload, setPayload] = useState('');

  useEffect(() => {
    socket.on('message', payload => {
      setMessage(payload.message);
    })
  }, [])

  const onChange = e => {
    setMessage(e.target.value);
    // send a message to the server 
    socket.emit('new-message', {
      message: e.target.value
    })
  }




  return (
    <div>
      <header className="App-header">
        <input type="text" value={message} onChange={onChange} />
      </header>
    </div>
  )
}
