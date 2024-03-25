import {motion} from 'framer-motion'
import { LuClock9 } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <div className='bg-[#091e20] text-white md:flex justify-center items-center md:h-[50vh] py-2 w-full'>
      <div className='max-w-[1440px] h-[full] md:flex  justify-between mx-auto p-1 m-1 gap-2'>
        <motion.div className='md:w-[50%] md:p-3 p-1'
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.1 }}
        variants={{
          show: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        >
            <h2>Ags Sofas</h2>
            <div className='flex flex-wrap items-center gap-2 p-1'>
                <LuClock9  size={30}/>
                <p className='text-sm md:text-lg'>9 AM to 10 PM</p>
            </div>
            <div className='flex items-center gap-2 p-1'>
                <Link href="tel:+917020083904" className='flex my-2 gap-3'>
                <FaPhoneAlt  size={25}/>
                <p className='text-sm md:text-lg'>+91 7020083904</p>
                </Link>
            </div>
            <div className='flex items-center gap-2 p-1 '>
                <Link className='flex my-2 gap-3'>
                <FaLocationDot size={30} className='mr-2'/>
                <p className='text-sm md:text-lg'>Opp Margosa Heights Apartment, Mohammadwadi, Hadapsar, Pune, Maharashtra 411028</p>
                </Link>
            </div>
        </motion.div>
        <motion.div className='md:w-[50%]  md:p-3 p-1'
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        variants={{
          show: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        >
            <h2 className='mx-1'>Follow us </h2>
            <div className='flex items-center gap-2 p-1'>
            <a href="whatsapp://send?phone=+917020083904&text=Hi there! 👋 I'm interested in learning more about your ags sofa. Could you please provide me with additional details? Thank you! 🛋️" target="_blank">
            <FaSquareWhatsapp  size={40}  className='cursor-pointer hover:text-green-900'/>
            </a>
            <a href="https://instagram.com/agssofas" target="_blank">
            <FaInstagram  size={40} className='cursor-pointer hover:text-green-900'/>
            </a>
            <a href="https://www.facebook.com/people/Ags-Sofas/pfbid0hEAYNQFJG6VnePEz5Djt8kR2svrhf6T1XDsPuUbnxMqMGLzgaeexUV3ukJi4eY63l/" target="_blank">
            <FaFacebookSquare  size={40} className='cursor-pointer hover:text-green-900'/>
            </a>
            </div>
        </motion.div>
      </div>
    </div>
    <h2 className='text-sm bg-black text-white text-center py-2'>Copyright 2023 <Link tp="/" className='text-[#dbc369]'>@agssofas</Link>, All rights reserved.</h2>
    </>
  )
}

export default Footer
