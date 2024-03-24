import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import logo from "../assets/ags-new-logo.png";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleNavLinkClick = () => {
    // Close the responsive menu when a navigation link is clicked
    setToggle(false);
  };

  return (
    <header className=" w-full p-2 h-16 bg-[#124044] text-white">
      <nav className="max-w-[1440px] mx-auto h-full flex justify-between items-center">
        <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="w-[3.5rem] h-[55px] object-cover "
        />
        </Link>
        {toggle ? (
          <MdOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-2xl cursor-pointer duration-700"
          />
        ) : (
          <IoMenu
            onClick={() => setToggle(!toggle)}
            className="text-2xl cursor-pointer md:hidden block duration-700"
          />
        )}
        <ul className="hidden md:flex gap-3 px-2">

          <li>
            <NavLink
              to="/"
              
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "underline underline-offset-8" : "text-white"
                } pr-4 pl-3 duration-800 lg:hover:bg-transparent `
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "underline underline-offset-8" : "text-white"
                } pr-4 pl-3 duration-800 lg:hover:bg-transparent `
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "underline underline-offset-8" : "text-white"
                } pr-4 pl-3 duration-800 lg:hover:bg-transparent `
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "underline underline-offset-8" : "text-white"
                } pr-4 pl-3 duration-800 lg:hover:bg-transparent `
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {/* Resposive menu */}
        <ul
          className={`md:hidden z-[99] duration-700 ease-in-out  fixed bg-[#124044] justify-start items-cnter flex flex-col right-[-100%] top-[4rem] gap-3 p-2 w-full h-full  ${
            toggle ? "right-[0]" : "right-[-100%]"
          }`}
        >
          <li>
            <NavLink
              to="/"
              onClick={handleNavLinkClick}
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "underline underline-offset-8" : "text-white"
                } pr-4 pl-3 duration-800 lg:hover:bg-transparent `
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={handleNavLinkClick}
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "underline underline-offset-8" : "text-white"
                } pr-4 pl-3 duration-800 lg:hover:bg-transparent `
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              onClick={handleNavLinkClick}
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "underline underline-offset-8" : "text-white"
                } pr-4 pl-3 duration-800 lg:hover:bg-transparent `
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={handleNavLinkClick}
              className={({ isActive }) =>
                `block py-2 ${
                  isActive ? "underline underline-offset-8" : "text-white"
                } pr-4 pl-3 duration-800 lg:hover:bg-transparent `
              }
            >
              Contact
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
