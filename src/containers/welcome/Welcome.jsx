import React from 'react'
import './welcome.css'
import image from './welcome.png'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {

  const navigate = useNavigate()

  return (
    <div className='flex flex-col h-screen p-5 items-center justify-between'>
      <div className='flex flex-col pt-8 items-center justify-between'>
        <img src={image} alt="" className='welcome_image' />
        <header className='font-roboto font-light text-[40px] md:text-[60px] mt-12'>Healthy Aesthetics</header>
      </div>
      <button onClick={() => {navigate('/login')}} className='welcome_button'>Get Started</button>
    </div>
  )
}

export default Welcome