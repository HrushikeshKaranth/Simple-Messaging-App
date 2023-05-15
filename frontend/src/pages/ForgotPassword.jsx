import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import axios from '../helpers/axios';
//-----
function ForgotPassword() {
  // navigation
  let navigate = useNavigate();

  // states
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({
    email:'',
  });

  // function to handle input changes
  function handleChange(e){
    const {value, name} = e.target;
    setData({...data, [name]: value});

  }
  // function to handle forgot password
  function handleForgotPassword(){
    setIsLoading(true)
    axios.put('users/2', data)
    .then((res)=>{
      console.log(res.data);
      setIsLoading(false)
    })
    .catch((err)=>{
      console.log(err.response.data.error);
      setIsLoading(false)
    })
  }

  //clean up
  useEffect(()=>{
    return ()=>{
      setIsLoading(false)
    }
  },[])
  return (
    <main className='main topAlign'>
      {/* header section */}
      <header className='header'>
        <Icon icon="ic:round-keyboard-backspace" className='mb5 pointer' onClick={() => { navigate('/login') }} />
        <h2 className='primaryColor bold'>Forgot Password?</h2>
        <h4>Recover you password if you have forgot the password!</h4>
      </header>

      {/* form section */}
      <form onSubmit={(e) => { e.preventDefault() }}>
        {/* input */}
        <div className='inputSection'>
          <label htmlFor="email">Email</label>
          <div>
            <Icon icon="mdi:at" className='primaryColor icon' />
            <input type="email" name='email' placeholder='Ex: abc@example.com'
            value={data.email} onChange={handleChange} /> 
          </div>
        </div>

        {/* button */}
        <button className='btnType2 my10' onClick={handleForgotPassword}>{isLoading ? <Icon icon="eos-icons:loading" />: 'Submit'}</button>
      </form>
    </main>
  )
}

export default ForgotPassword