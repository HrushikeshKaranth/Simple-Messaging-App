import React from 'react';
import '../assets/css/welcomePage.css'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
//-----
function WelcomePage() {
  return (
    <main className='main'>
      <section>
        <h3>Welcome to</h3>
        <h1 className='primaryColor bold'>MaxPense</h1>
        <h4>A place where you can track all your expenses and incomes...</h4>
      </section>
      <section className='section2'>
        <h4>Let’s Get Started...</h4>
        <div className='buttons'>
          <button className='btnType1'>
            <Icon icon="logos:google-icon" className='icon' />
            <h4 className='bold'><Link to={'/register'}>Continue with Google</Link></h4>
          </button>
          <button className='btnType1'>
            <Icon icon="mdi:at" className='primaryColor icon' />
            <h4 className='bold'><Link to={'/register'}>Continue with Email</Link></h4>
          </button>
        </div>
        <h4 className='center'>Already have an account? <Link to={'/login'}><u className='bold pointer primaryColor'>Login</u></Link></h4>
      </section>
    </main>
  )
}

export default WelcomePage