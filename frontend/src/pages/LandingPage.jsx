import React, { useContext, useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../helpers/context';
import { io } from 'socket.io-client'
import '../assets/css/landingPage.css'
const socket = io.connect('http://localhost:3001');// creating connection to server
//-----
function LandingPage() {
    // navigation
    let navigate = useNavigate()

    // states
    const [room, setRoom] = useState("")
    const [message, setMessage] = useState("")
    const [messageReceived, setMessageReceived] = useState([])
    const [login, setLogin] = useContext(AuthContext)

    // function to send messages
    const sendMessage = () => {
        socket.emit('send_message', { message });
        setMessage('')
    };

    // listening to incoming messages
    useEffect(() => {
        socket.on('receive_message', (data) => {
            setMessageReceived(prev => [...prev, data.message]);
        });
    }, [socket])
    console.log(messageReceived);

    // function to handle logout
    function handleLogout() {
        localStorage.removeItem('auth'); // removing token variable from localstorage.
        setLogin({ ...login, auth: false, token: '' });
        alert('Logged out!');
        socket.send('hello');
        navigate('/'); // redirecting to welcome page.
    }

    //logs

    return (
        <main className='messageMain'>
            {/* header section */}
            <header className='header messageHeader'>
                <Icon icon="ic:round-keyboard-backspace" className='mb5 pointer' onClick={() => { navigate('/login') }} />
                <h2 className='primaryColor bold'>Welcome</h2>
                <h4>Save all your work and Logout!</h4>
            </header>
            {/* sending message */}
            <div className='typeMessage'>
                <div className='split'>
                    <input type="text" className='messageInput' placeholder='Type Room name of id'
                        value={room}
                        onChange={(e) => { setRoom(e.target.value) }}
                    // onKeyPress={(e) => { e.key === 'Enter' && sendRoom(); }} 
                    />
                    <button className='btnType3' onClick={sendMessage}>Join</button>
                </div>
                <div className='split'>
                    <input type="text" className='messageInput' placeholder='Type Message'
                        value={message}
                        onChange={(e) => { setMessage(e.target.value) }}
                        onKeyPress={(e) => { e.key === 'Enter' && sendMessage(); }} />
                    <button className='btnType3' onClick={sendMessage}>Send </button>

                </div>
            </div>
            {/* displaying received message  */}
            <div className='messageContainer'>
                <h4>Room Id:</h4>
                <h4>Message:</h4>
                <div className='messageBox'>{messageReceived.map((msg) => { return <h4>{msg}</h4> })}</div>
            </div>
            {/* Logout */}
            <div>
                <button className='my5 logout'
                    onClick={handleLogout}
                >Logout</button>
            </div>

        </main>
    )
}

export default LandingPage