import React from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
//-----
function ForgotPassword() {
  let navigate = useNavigate();
  return (
    <main className='main topAlign'>
      <header className='header'>
        <Icon icon="ic:round-keyboard-backspace" className='mb5 pointer' onClick={() => { navigate('/login') }} />
        <h2 className='primaryColor bold'>Forgot Password?</h2>
        <h4>Recover you password if you have forgot the password!</h4>
      </header>
      <form onSubmit={(e) => { e.preventDefault() }}>
      <div className='inputSection'>
          <label htmlFor="email">Email</label>
          <div>
            <Icon icon="mdi:at" className='primaryColor icon' />
            <input type="email" placeholder='Ex: abc@example.com' />
          </div>
        </div>
        <button className='btnType2 my10' onClick={()=>{navigate('/forgot-password-otp')}}>Submit</button>
      </form>
    </main>
  )
}

export default ForgotPassword