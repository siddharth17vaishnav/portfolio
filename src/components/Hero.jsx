import Profile from '../assets/profile.jpg'
import '../index.css'
import {BsInstagram,BsLinkedin,BsGithub,BsTelegram} from 'react-icons/bs'
import Navbar from './Navbar'


const Hero = () => {
  return (
     <div className='flex flex-col md:flex-row justify-center gap-[80px] w-full h-screen items-center '>
    <div className='flex gap-6 mx-4 md:mx-0'>
      <div className='flex flex-col gap-2'>
        <BsGithub size={24} className="cursor-pointer"/>
        <BsLinkedin size={24} className="cursor-pointer"/>
         <BsInstagram size={24} className="cursor-pointer"/>
      </div>
      <div>
        <h1 className='text-3xl font-bold '>Siddharth Vaishnav✋</h1>
        <h5 className='text-xl'>FullStack Developer</h5>
        <p className='max-w-[500px]'>I'm FullStack Web Developer based in Surat and i am very passionate and dedicated to my work</p>
        <button className='flex bg-[#383636] hover:bg-black  text-white px-4 mt-3 rounded-lg py-1 outline-none cursor-pointer'>Say Hello<BsTelegram className="mt-1 mx-1" /> </button>
      </div>
    </div>
    <div className=' flex justify-center'>
    <img className="profile" src={Profile} alt="Profile Photo"/>
    </div>
  </div>
  )
}

export default Hero