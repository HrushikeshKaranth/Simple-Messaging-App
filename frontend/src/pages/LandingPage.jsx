import React, { useContext, useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../helpers/context';
import ScrollToBottom from 'react-scroll-to-bottom'
import { io } from 'socket.io-client'
import '../assets/css/landingPage.css'
//-----
function LandingPage({ socket, username, room, showChat }) {
    // navigation
    let navigate = useNavigate()

    // states
    const [currentMessage, setCurrentMessage] = useState("")
    const [messageReceived, setMessageReceived] = useState([])
    const [login, setLogin] = useContext(AuthContext)

    // function to send messages
    const sendMessage = async () => {
        if (currentMessage !== '') {
            const messageData = {
                room: room,
                username: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            }

            await socket.emit("send_message", messageData);
            setMessageReceived(prev => [...prev, messageData]);
            setCurrentMessage('');
        }
    };

    // listening to incoming messages
    useEffect(() => {
        socket.on('receive_message', (data) => {
            setMessageReceived(prev => [...prev, data]);
        });

        return () => socket.removeListener('receive_message');
    }, [socket])

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
        <>
            {/* header section */}
            <header className='header messageHeader'>
                <Icon icon="ic:round-keyboard-backspace" className='mb5 pointer' onClick={() => { showChat(false) }} />
                <h2 className='primaryColor bold'>Welcome</h2>
                {/* <h4>Save all your work and Logout!</h4> */}
            </header>

            {/* sending message */}
            <div className='split'>
                <input type="text" className='messageInput' placeholder='Type Message'
                    value={currentMessage}
                    onChange={(e) => { setCurrentMessage(e.target.value) }}
                    onKeyPress={(e) => { e.key === 'Enter' && sendMessage(); }} />

                <button className='btnType3' onClick={sendMessage}>Send </button>

            </div>
            
            {/* displaying received message  */}
            <div className='messageContainer'>
                <h4>Room Id: {room}</h4>
                <h4>Message:</h4>
                <>
                    <ScrollToBottom className='messageBox'>
                        {messageReceived.map((data, i) => {
                            return (
                                <div key={i} className='messages' id={username === data.username ? "myBg" : "otherBg"}>
                                    <div>
                                        <div>
                                            <h3>{data.message}</h3>
                                        </div>
                                        <span>
                                            <h4><b>{data.username}</b></h4>
                                            <h4>{data.time}</h4>
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </ScrollToBottom>
                </>
            </div>

            {/* Logout */}
            <div>
                <button className='my5 logout'
                    onClick={handleLogout}
                >Logout</button>
            </div>

        </>
    )
}

export default LandingPage