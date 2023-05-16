import React, { useContext, useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../helpers/context';
import { io } from 'socket.io-client'
import '../assets/css/landingPage.css'
import LandingPage from './LandingPage';
const socket = io.connect('http://localhost:3001');// creating connection to server

function SelectRoomPage() {
    // navigation
    let navigate = useNavigate()

    // states
    const [showChat, setShowChat] = useState(false)
    const [room, setRoom] = useState("")
    const [username, setUsername] = useState("")
    const [login, setLogin] = useContext(AuthContext)

    function joinRoom() {
        if (username !== ' && rom !== ') {
            socket.emit("join_room", room);
            setShowChat(true);
        }
    }

    // // listening to incoming messages
    // useEffect(() => {
    //     socket.on('receive_message', (data) => {
    //         setMessageReceived(prev => [...prev, data.message]);
    //     });
    // }, [socket])

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
            {!showChat ?
                <>
                    {/* header section */}
                    <header className='header messageHeader'>
                        {/* <Icon icon="ic:round-keyboard-backspace" className='mb5 pointer' onClick={() => { navigate('/login') }} /> */}
                        <h2 className='primaryColor bold'>Welcome</h2>
                        <h4>Enter Room and Username!</h4>
                    </header>
                    {/* sending message */}
                    <div className='typeMessage'>
                        <input type="text" className='messageInput' placeholder='Type Room name or id'
                            value={room}
                            onChange={(e) => { setRoom(e.target.value) }} />

                        <input type="text" className='messageInput' placeholder='Type Username'
                            value={username}
                            onChange={(e) => { setUsername(e.target.value) }} />

                        <button className='btnType2' onClick={joinRoom}>Join</button>

                    </div>

                    {/* Logout */}
                    <div>
                        <button className='my5 logout'
                            onClick={handleLogout}
                        >Logout</button>
                    </div>
                </>
                :
                <LandingPage socket={socket} username={username} room={room} showChat={setShowChat} />
            }
        </main >
    )
}

export default SelectRoomPage