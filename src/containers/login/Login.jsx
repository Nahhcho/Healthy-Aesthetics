import React from 'react'
import './login.css'
import pic from './pic.png'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
  
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center p-10 h-screen justify-around'>
      <div className='flex flex-col items-center'>
        <img src={pic} alt="" className='w-[140px]'/>
        <header className='text-[24px] font-semibold'>Healthy Aesthetics</header>
        <p>Achieve your fitness goals effortlessly!</p>
  
      </div>
      <div className='flex flex-col items-center'>
          <input className='login-input' type="text" placeholder='Email'/>
          <div className='password-div'>
            <input className='login-input' type="text" placeholder='Password'/>
            <p className='text-[13px] text-right mr-[7px]'>Forgot your password?</p>
        </div>
        <button className='login-button'>Log in</button>
      </div>
      <div className='flex flex-col items-center'>
      <div className='flex items-center'>
        <div className='divider'></div>
        <p className='ml-[10px] mr-[10px]'>or</p>
        <div className='divider'></div>
      </div>
      <div className='flex'>
        <button className='google-button mr-[20px]'>Google</button>
        <button className='google-button'>Facebook</button>
      </div>
      </div>
      <p className='text-[15px] font-semibold' onClick={() =>{navigate('/register')}}>New here? Join now</p>
    </div>
  )
}

export default Login