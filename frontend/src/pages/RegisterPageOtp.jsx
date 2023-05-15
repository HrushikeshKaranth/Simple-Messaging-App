import React from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
//-----
function RegisterPageOtp() {
  let navigate = useNavigate()
  return (
    <main className='main topAlign'>
      {/* header section */}
      <header className='header'>
        <Icon icon="ic:round-keyboard-backspace" className='mb5 pointer' onClick={() => { navigate('/register') }} />
        <h2 className='primaryColor bold'>Register</h2>
        <h4>We have sent an email to your email account with a verification code!</h4>
      </header>

      {/* form section */}
      <form onSubmit={(e) => { e.preventDefault() }}>
        {/* input */}
        <div className='inputSection'>
          <label htmlFor="verificationCode">Verification Code</label>
          <div>
            <input type="text" placeholder='Ex: 123456' />
          </div>
        </div>

        {/* button */}
        <button className='btnType2 my10' onClick={() => { navigate('/login') }}>Register</button>
      </form>
    </main>
  )
}

export default RegisterPageOtp