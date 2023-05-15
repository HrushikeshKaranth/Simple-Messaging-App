import React from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
//-----
function RegisterPage() {
  let navigate = useNavigate()
  return (
    <main className='main topAlign'>
      {/* header section */}
      <header className='header'>
        <Icon icon="ic:round-keyboard-backspace" className='mb5 pointer' onClick={() => { navigate('/') }} />
        <h2 className='primaryColor bold'>Register</h2>
        <h4>Create an <span className='primaryColor bold'>account</span> to access all the features of <span className='bold'>Maxpense!</span></h4>
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
          <label htmlFor="name">Your Name</label>
          <div>
            <Icon icon="iconamoon:profile" className='primaryColor icon' />
            <input type="text" placeholder='Ex. Saul Ramirez' />
          </div>
        </div>

        {/* input */}
        <div className='inputSection'>
          <label htmlFor="password">Your Password</label>
          <div>
            <Icon icon="material-symbols:lock-outline" className='primaryColor icon' />
            <input type="password" placeholder='********' />
          </div>
        </div>

        {/* button */}
        <button className='btnType2 my10' onClick={() => { navigate('/register-otp') }}>Register</button>

        {/* link to login page */}
        <h4>Already have an account? <span className='primaryColor bold pointer' onClick={() => { navigate('/login') }}><u>Login</u></span></h4>
      </form>
    </main>
  )
}

export default RegisterPage