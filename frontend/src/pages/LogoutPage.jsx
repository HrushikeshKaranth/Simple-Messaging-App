import React, { useContext, useState } from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import axios from '../helpers/axios';
import { AuthContext } from '../helpers/context';
//-----
function LogoutPage() {
    // navigation
    let navigate = useNavigate()

    // states
    const [login, setLogin] = useContext(AuthContext)

    // function to handle logout
    function handleLogout() {
        localStorage.removeItem('auth'); // removing token variable from localstorage.
        setLogin({ ...login, auth: false, token: '' }); 
        console.log('Logged out!');
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