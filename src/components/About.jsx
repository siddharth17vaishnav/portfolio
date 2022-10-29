import React from 'react'
import Profile from '../assets/profile.jpg'
import {CgNotes} from 'react-icons/cg'
const About = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center w-full'>
      <h1 className='text-3xl font-bold  pt-6'>About Me</h1>
      <h5 className='text-gray-800'>My Introduction</h5>
      </div>
    <div className='flex justify-center gap-[100px] mx-16 h-screen  items-center'>
        <img src={Profile} alt="profile photo" className='w-[380px] h-[400px] object-cover hidden md:block rounded-3xl outline-none'/>
        <div>
          <div className='flex justify-around  gap-12'>
          <div className=' py-4 bg-gray-600 hover:bg-black text-white px-8 outline-1 rounded-md'><ul className='list-none flex flex-col items-center'><li>he</li><li>Experience</li>2+ Years<li></li></ul></div>
          <div className=' py-4 bg-gray-600 hover:bg-black  text-white px-8 outline-1 rounded-md'><ul className='list-none flex flex-col items-center'><li>he</li><li>Experience</li>2+ Years<li></li></ul></div>
          <div className=' py-4 bg-gray-600 hover:bg-black  text-white px-8 outline-1 rounded-md'><ul className='list-none flex flex-col items-center'><li>he</li><li>Experience</li>2+ Years<li></li></ul></div>
          </div>
          <p className='max-w-[500px] text-justify mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione suscipit explicabo velit aperiam recusandae soluta adipisci rem cupiditate hic? Sed ducimus repudiandae mollitia voluptatum itaque dolores quibusdam quos, quam beatae.</p>
          <button className='flex bg-[#383636] hover:bg-black  text-white px-4 mt-3 rounded-lg py-2 outline-none cursor-pointer'>Download CV <CgNotes className='m-1'/> </button>
        
        </div>
    </div>
    </>
  )
}

export default About