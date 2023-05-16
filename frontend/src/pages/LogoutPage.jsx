import React, { useContext, useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../helpers/context';
import { io } from 'socket.io-client'
const socket = io.connect('http://localhost:3001');// creating connection to server
//-----
function LogoutPage() {
    // navigation
    let navigate = useNavigate()

    // states
    const [message, setMessage] = useState("")
    const [messageReceived, setMessageReceived] = useState("")
    const [login, setLogin] = useContext(AuthContext)

    // function to send messages
    const sendMessage = () => {
        socket.emit('send_message', { message })
    };

    // listening to incoming messages
    useEffect(() => {
        socket.on('receive_message', (data) => {
            setMessageReceived(data.message);
        })
    }, [socket])

    // function to handle logout
    function handleLogout() {
        localStorage.removeItem('auth'); // removing token variable from localstorage.
        setLogin({ ...login, auth: false, token: '' });
        alert('Logged out!');
        socket.send('hello');
        navigate('/'); // redirecting to welcome page.
    }

    return (
        <main className='main topAlign'>
            {/* header section */}
            <header className='header'>
                <Icon icon="ic:round-keyboard-backspace" className='mb5 pointer' onClick={() => { navigate('/login') }} />
                <h2 className='primaryColor bold'>Welcome</h2>
                <h4>Save all your work and Logout!</h4>
            </header>
            {/* sending message */}
            <section>
                <input type="text" placeholder='Type Message'
                    onChange={(e) => { setMessage(e.target.value) }} />
                <button className='btnType2' onClick={sendMessage}>Send </button>
            </section>
            {/* displaying received message  */}
            <section>
                <h3>Message:</h3>
                <h4 className='messageBox'>{messageReceived}</h4>
            </section>
            {/* Logout */}
            <section>
                <button className='btnType2 my5'
                    onClick={handleLogout}
                >Logout</button>
            </section>

        </main>
    )
}

export default LogoutPage