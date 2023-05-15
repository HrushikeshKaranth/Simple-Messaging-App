import React, { useContext, useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import axios from '../helpers/axios';
import { AuthContext } from '../helpers/context';
//-----
function LoginPage() {
  // navigation
  let navigate = useNavigate()

  //states
  const [isLoading, setIsLoading] = useState(false)
  const [login, setLogin] = useContext(AuthContext)
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  // function to handle login
  function handleLogin() {
    setIsLoading(true); // for loading animation
    // posting login data
    axios.post('/login', data)
      .then((res) => {
        console.log(res);
        setLogin({ ...login, auth: true, token: res.data.token }); // setting token
        localStorage.setItem('auth', res.data.token); // setting token in localstorage
        console.log('Logged in Successfully!');
        console.log(res.data.token);
        setIsLoading(false);
        navigate('/logout'); // redirecting to logout page
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err.response.data.error);
      })
  }

  // function to handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  // Clean up
  useEffect(()=>{
    return ()=>{
      setIsLoading(false);
    }
  },[])

  //logs
  console.log(data);

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
            <input type="email" name='email' placeholder='Ex: abc@example.com'
              value={data.email}
              onChange={handleChange} />
          </div>
        </div>

        {/* input */}
        <div className='inputSection'>
          <label htmlFor="password">Your Password</label>
          <div>
            <Icon icon="material-symbols:lock-outline" className='primaryColor icon' />
            <input type="password" name='password' placeholder='********'
              value={data.password}
              onChange={handleChange} />
          </div>

          {/* link to forgot password page */}
          <h5 className='primaryColor pointer' onClick={() => { navigate('/forgot-password') }}><u>Forgot Password?</u></h5>
        </div>

        {/* button */}
        <button className='btnType2 my5'
          onClick={handleLogin}
        >{!isLoading ? 'Login': <Icon icon="eos-icons:loading" />}</button>

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