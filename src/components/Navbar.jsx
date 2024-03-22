import React, { useState } from 'react'
import { MdOutlineClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import logo from '../assets/ags-new-logo.png'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <header className=' w-full p-2 h-16 bg-[#124044] text-white'>    
            <nav className='max-w-[1440px] mx-auto h-full flex justify-between items-center'>
            <img src={logo} alt="logo" className="w-[3rem] h-[35px] object-contain "/>
                {
                    toggle ? 
                    <MdOutlineClose onClick={()=>setToggle(!toggle)} className='text-2xl cursor-pointer duration-700' />
                    :
                    <IoMenu onClick={()=>setToggle(!toggle)} className='text-2xl cursor-pointer md:hidden block duration-700'/>
                }
                <ul className='hidden md:flex gap-3 px-2'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>
                {/* Resposive menu */}
                <ul className={`md:hidden z-[99] duration-700 ease-in-out  fixed bg-[#124044] justify-start items-cnter flex flex-col right-[-100%] top-[4rem] gap-3 p-2 w-full h-full  ${toggle? 'right-[0]' : 'right-[-100%]'}`}>
                    <li className='p-4 text-white'>Home</li>
                    <li className='p-4 text-white'>About</li> 
                    <li className='p-4 text-white'>Contact</li>
                    <li className='p-4 text-white'>Services</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar