import React from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
//-----
function ForgotPasswordReset() {
    let navigate = useNavigate();
    return (
        <main className='main topAlign'>
            {/* header section */}
            <header className='header'>
                <Icon icon="ic:round-keyboard-backspace" className='mb5 pointer' onClick={() => { navigate('/forgot-password-otp') }} />
                <h2 className='primaryColor bold'>Forgot Password?</h2>
                <h4>Set your new password to login into your account!</h4>
            </header>

            {/* form section */}
            <form onSubmit={(e) => { e.preventDefault() }}>
                {/* input */}
                <div className='inputSection'>
                    <label htmlFor="password">Enter New Password</label>
                    <div>
                        <Icon icon="material-symbols:lock-outline" className='primaryColor icon' />
                        <input type="password" placeholder='********' />
                    </div>
                </div>

                {/* input */}
                <div className='inputSection'>
                    <label htmlFor="confirmPassword">Confirm New Password</label>
                    <div>
                        <Icon icon="material-symbols:lock-outline" className='primaryColor icon' />
                        <input type="password" placeholder='********' />
                    </div>
                </div>

                {/* button */}
                <button className='btnType2 my10' onClick={() => { navigate('/login') }}>Submit</button>
            </form>
        </main>
    )
}

export default ForgotPasswordReset