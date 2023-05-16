import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import axios from '../helpers/axios';
//-----
function RegisterPage() {
  // navigation
  let navigate = useNavigate()

  // states
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({ email: '', password: '' })

  //function to handle input changes
  function handleChange(e) { setData({ ...data, [e.target.name]: e.target.value }); }

  // function to handle registration
  function handleRegister() {
    setIsLoading(true); // for loading animation.
    // posting data
    axios.post('/register', data)
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        alert('Registered Successfully!');
        navigate('/login'); // redirecting to login page after registration.
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data.error);
      })
  }

  //cleanup
  useEffect(() => { return () => { setIsLoading(false) } }, [])

  //logs
  console.log(data);

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
            <input type="email" name='email' placeholder='Ex: abc@example.com'
              value={data.email}
              onChange={handleChange} />
          </div>
        </div>

        {/* input */}
        <div className='inputSection'>
          <label htmlFor="name">Your Name</label>
          <div>
            <Icon icon="iconamoon:profile" className='primaryColor icon' />
            <input type="text" name='username' placeholder='Ex. Saul Ramirez' />
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
        </div>

        {/* button */}
        <button className='btnType2 my10' onClick={handleRegister}>{isLoading ? <Icon icon="eos-icons:loading" /> : 'Register'}</button>

        {/* link to login page */}
        <h4>Already have an account? <span className='primaryColor bold pointer' onClick={() => { navigate('/login') }}><u>Login</u></span></h4>
      </form>
    </main>
  )
}

export default RegisterPage