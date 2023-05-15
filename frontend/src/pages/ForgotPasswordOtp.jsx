import React from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
//-----
function ForgotPasswordOtp() {
    let navigate = useNavigate();
    return (
        <main className='main topAlign'>
            <header className='header'>
                <Icon icon="ic:round-keyboard-backspace" className='mb5 pointer' onClick={() => { navigate('/forgot-password') }} />
                <h2 className='primaryColor bold'>Forgot Password?</h2>
                <h4>We have sent an email to your email account with a verification code!</h4>
            </header>
            <form onSubmit={(e) => { e.preventDefault() }}>
                <div className='inputSection'>
                    <label htmlFor="verificationCode">Verification Code</label>
                    <div>
                        <input type="text" placeholder='Ex: 123456' />
                    </div>
                </div>
                <button className='btnType2 my10' onClick={() => { navigate('/forgot-password-reset') }}>Submit</button>
            </form>
        </main>
    )
}

export default ForgotPasswordOtp