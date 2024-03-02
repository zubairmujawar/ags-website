import React from "react";
import { motion } from "framer-motion";
import logo from '../assets/ags-new.png'

const Navbar = () => {
  return (
    <nav className="flex w-full fixed sm:h-[6vh] md:h-[6vh] h-[70px] bg-[#1B383A]/80 text-white justify-evenly items-center">
        <img src={logo} alt="logo" className="w-[3rem] h-[35px] object-contain "/>
        <ul className="flex justify-around items-center gap-3 ">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;
