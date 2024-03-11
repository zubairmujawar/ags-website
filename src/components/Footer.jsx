import React from 'react'
import { LuClock9 } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='bg-[#091e20] text-white md:flex justify-center items-center md:h-[50vh] py-2 w-full'>
      <div className='max-w-[1440px] h-[full] md:flex  justify-between mx-auto p-1 m-1 gap-2'>
        <div className='md:w-[50%] md:p-3 p-1'>
            <h2>Ags Sofas</h2>
            <div className='flex flex-wrap items-center gap-2 p-1'>
                <LuClock9  size={30}/>
                <p>9 AM to 10 PM</p>
            </div>
            <div className='flex items-center gap-2 p-1'>
                <FaPhoneAlt  size={25}/>
                <p>987654321</p>
            </div>
            <div className='flex items-center gap-2 p-1'>
                <FaLocationDot size={30} className='mr-2'/>
                <p>Opp Margosa Heights Apartment, Mohammadwadi, Hadapsar, Pune, Maharashtra 411028</p>
            </div>
        </div>
        <div className='md:w-[50%]  md:p-3 p-1'>
            <h2 className='mx-1'>Follow us </h2>
            <div className='flex items-center gap-2 p-1'>
            <FaSquareWhatsapp  size={40}  className='cursor-pointer'/>
            <FaInstagram  size={40} className='cursor-pointer'/>
            <FaFacebookSquare  size={40} className='cursor-pointer'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
