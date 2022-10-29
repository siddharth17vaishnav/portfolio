import React from 'react'
import {BiCodeAlt} from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='flex justify-around mt-4'>
        <h1 className='text-xl font-bold'>{"<SIDDHARTH />"}</h1>
        <BiCodeAlt size={35} className='block md:hidden cursor-pointer'/>
        <ul className='list-none  gap-6 hidden md:flex'>
            
            <li className='font-bold cursor-pointer hover:underline'>Home</li>
            <li className='font-bold cursor-pointer hover:underline'>About</li>
            <li className='font-bold cursor-pointer hover:underline'>Skills</li>
            <li className='font-bold cursor-pointer hover:underline'>Journey</li>
            <li className='font-bold cursor-pointer hover:underline'>Portfolio</li>
            <li className='font-bold cursor-pointer hover:underline'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar