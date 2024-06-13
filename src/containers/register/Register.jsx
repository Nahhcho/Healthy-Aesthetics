import React from 'react'
import './register.css'
import pic from './community.png'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center h-screen justify-evenly'>
        <div className='flex flex-col items-center'>
            <img src={pic} alt="" className='w-[252px] mt-8'/>
            <header className='font-semibold text-[24px] mt-4'>Sign up</header>
            <p className='text-[#5d5d5b] text-[14px] text-center'>Join the community</p>
        </div>
        <div className='flex flex-col items-center mt-[25px]'>
            <div className='flex flex-col items-start mb-[15px]'>
                <p className='text-[14px] font-semibold mb-[10px]'>Your full name</p>
                <input className='reg-input' type="text" placeholder='First Last'/>
            </div>
            <div className='flex flex-col items-start mb-[15px]'>
                <p className='text-[14px] font-semibold mb-[10px]'>Enter your e-mail address</p>
                <input className='reg-input' type="text" placeholder='email@example.com'/>
            </div>
            <div className='flex flex-col items-start mb-[15px]'>
                <p className='text-[14px] font-semibold mb-[10px]'>Create a username</p>
                <input className='reg-input' type="text" placeholder='username123'/>
            </div>
            <div className='flex flex-col items-start mb-[15px]'>
                <p className='text-[14px] font-semibold mb-[10px]'>Set your password</p>
                <input className='reg-input' type="text" placeholder='***********'/>
            </div>
            <div className='flex flex-col items-start mb-[15px]'>
                <p className='text-[14px] font-semibold mb-[10px]'>Confirm password</p>
                <input className='reg-input' type="text" placeholder='***********'/>
            </div>
            <div>
            <button onClick={() => {navigate('/info')}} className='reg-button mb-4'>Register</button>
            </div>
        </div>
        
    </div>
  )
}

export default Register