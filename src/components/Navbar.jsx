import React, { useState } from 'react'
import { MdOutlineClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import logo from '../assets/ags-new.png'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <header className='z-9  w-full p-2 h-16 bg-green-800 text-white'>    
            <nav className='max-w-[1440px] mx-auto h-full flex justify-between items-center'>
            <img src={logo} alt="logo" className="w-[3rem] h-[35px] object-contain "/>
                {
                    toggle ? 
                    <MdOutlineClose onClick={()=>setToggle(!toggle)} className='text-2xl cursor-pointer' />
                    :
                    <IoMenu onClick={()=>setToggle(!toggle)} className='text-2xl cursor-pointer md:hidden block '/>
                }
                <ul className='hidden md:flex gap-3 px-2'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                {/* Resposive menu */}
                <ul className={`md:hidden duration-700 ease-in-out  fixed bg-black justify-start items-cnter flex flex-col right-[-100%] top-[4rem] gap-3 p-2 w-full h-[60vh]  ${toggle? 'right-[0]' : 'right-[-100%]'}`}>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>About</li>
                    <li className='p-4'>Contact</li>
                    <li className='p-4'>Services</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar