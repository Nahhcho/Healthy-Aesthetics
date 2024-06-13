import React from 'react'
import Nav from '../../components/nav/Nav'
import './info.css'
import Dropdown from './Dropdown'

const Info = () => {
  return (
      <div className='flex flex-col items-center h-screen w-96 mx-auto p-6 justify-evenly'>
          <header className='font-bold w-full text-start text-[24px] mt-2 mb-6'>Let's get started</header>
          <div className='w-full'>
            <p className='mb-[15px]'>Height (cm)</p>
            <input type='text' className='info-input w-full' />
          </div>
          <div className='w-full'>
            <p className='mb-[15px] '>Weight (kg)</p>
            <input type='text' className='info-input w-full' />
          </div>
          <div className='w-full'>
            <p className='mb-[15px] '>Age</p>
            <input type='text' className='info-input w-full' />
          </div>
          <div className='w-full'>
            <p className='mb-[15px]'>Gender</p>
            <div className='flex'>
              <div className='flex items-center mr-4'><input type="radio" /><p className='ml-2'>Male</p></div>
              <div className='flex items-center'><input type="radio" /> <p className='ml-2'>Female</p></div>
            </div>
          </div>
          <div className='w-full'>
            <p className='mb-[15px]'>Activity Level</p>
            <Dropdown />
          </div>
          <button className='info-button m-6'>Get started</button>
      </div>
  )
}

export default Info