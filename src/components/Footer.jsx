import { motion } from "framer-motion";
import facebookImg from "../assets/facebook.png";
import instagramImg from "../assets/instagram.png";
import whatsappImg from "../assets/whatsapp.png";
import phoneImg from "../assets/phone.png";
import logo from "../assets/ags-new-logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      {/* <div className='bg-[#091e20] text-white md:flex justify-center items-center h-auto min-h-[20rem] py-2 w-full'>
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
    <h2 className='text-sm bg-black text-white text-center py-2'>Copyright 2023 <Link tp="/" className='text-[#dbc369]'>@agssofas</Link>, All rights reserved.</h2> */}

      <footer className="bg-white dark:bg-gray-950">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <motion.div className="md:flex md:justify-between" 
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.1 }}
          variants={{
            show: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          >
            <div className="mb-6 md:mb-0 text-white">
              <a href="/" className="flex items-center">
                <img src={logo} className="h-12 me-5" alt="FlowBite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Ags Sofas
                </span>
              </a>
              <div className="w-[13rem] my-2">
                <p className="text-sm md:text-lg ">
                  Opp Margosa Heights Apartment, Mohammadwadi, Hadapsar, Pune,
                  Maharashtra 411028
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Company
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="/about" className="hover:underline">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:underline">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link
                      href="https://www.facebook.com/people/Ags-Sofas/pfbid0hEAYNQFJG6VnePEz5Djt8kR2svrhf6T1XDsPuUbnxMqMGLzgaeexUV3ukJi4eY63l/"
                      target="_blank"
                      className="hover:underline flex gap-2"
                    >
                      Facebook
                      <img src={facebookImg} alt="img" className="h-6" />
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="https://instagram.com/agssofas"
                      target="_blank"
                      className="hover:underline flex gap-2"
                    >
                      Instagram
                      <img src={instagramImg} alt="img" className="h-6" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Contact Now
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link
                      href="https://instagram.com/agssofas"
                      target="_blank"
                      className="hover:underline flex gap-2 justify-center items-center"
                    >
                      7020083904
                      <img src={phoneImg} alt="img" className="h-6" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="whatsapp://send?phone=+917020083904&text=Hi there! 👋 I'm interested in learning more about your ags sofa. Could you please provide me with additional details? Thank you! 🛋️"
                      target="_blank"
                      className="hover:underline flex gap-2"
                    >
                      Whatsapp
                      <img src={whatsappImg} alt="img" className="h-6" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center  sm:justify-between">
            <span className="text-sm md:text-lg text-gray-500  sm:text-center dark:text-gray-400">
              © 2024{" "}
              <Link href="/" className="hover:underline  text-[#dbc369]">
                Ags Sofas
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
