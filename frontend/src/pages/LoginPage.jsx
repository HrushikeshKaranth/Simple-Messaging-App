import React from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
//-----
function LoginPage() {
  let navigate = useNavigate()
  return (
    <main className='main topAlign'>
      {/* header section */}
      <header className='header'>
        <Icon icon="ic:round-keyboard-backspace" className='mb5 pointer' onClick={() => { navigate('/') }} />
        <h2 className='primaryColor bold'>Login</h2>
        <h4>Login now to track all your expenses and income at a place!</h4>
      </header>

      {/* form section */}
      <form onSubmit={(e) => { e.preventDefault() }}>
        {/* input */}
        <div className='inputSection'>
          <label htmlFor="email">Email</label>
          <div>
            <Icon icon="mdi:at" className='primaryColor icon' />
            <input type="email" placeholder='Ex: abc@example.com' />
          </div>
        </div>

        {/* input */}
        <div className='inputSection'>
          <label htmlFor="password">Your Password</label>
          <div>
            <Icon icon="material-symbols:lock-outline" className='primaryColor icon' />
            <input type="password" placeholder='********' />
          </div>

          {/* link to forgot password page */}
          <h5 className='primaryColor pointer' onClick={() => { navigate('/forgot-password') }}><u>Forgot Password?</u></h5>
        </div>

        {/* button */}
        <button className='btnType2 my5'>Login</button>

        {/* divider */}
        <div className='line'></div>

        {/* button */}
        <button className='btnType1 my5' onClick={() => { navigate('/') }}>
          <Icon icon="logos:google-icon" className='icon' />
          <h4 className='bold'>Continue with Google</h4>
        </button>

        {/* link to registration page */}
        <h4>Don’t have an account? <span className='primaryColor bold pointer' onClick={() => { navigate('/register') }}><u>Register</u></span></h4>
      </form>
    </main>
  )
}

export default LoginPage