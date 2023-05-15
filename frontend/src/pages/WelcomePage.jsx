import React from 'react';
import '../assets/css/welcomePage.css'
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';
//-----
function WelcomePage() {
  let navigate = useNavigate()
  return (
    <main className='main centerAlign'>
      <section>
        <h3>Welcome to</h3>
        <h1 className='primaryColor bold'>MaxPense</h1>
        <h4>A place where you can track all your expenses and incomes...</h4>
      </section>
      <section className='section2'>
        <h4>Let’s Get Started...</h4>
        <div className='buttons'>
          <button className='btnType1' onClick={()=>{navigate('/register')}}>
            <Icon icon="logos:google-icon" className='icon' />
            <h4 className='bold'>Continue with Google</h4>
          </button>
          <button className='btnType1' onClick={()=>{navigate('/register')}}>
            <Icon icon="mdi:at" className='primaryColor icon' />
            <h4 className='bold'>Continue with Email</h4>
          </button>
        </div>
        <h4 className='center'>Already have an account? <Link to={'/login'}><u className='bold pointer primaryColor'>Login</u></Link></h4>
      </section>
    </main>
  )
}

export default WelcomePage