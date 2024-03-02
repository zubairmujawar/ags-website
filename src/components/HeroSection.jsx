import React from "react";
import heroImg from "../assets/hero.png";
const HeroSection = () => {
  return (
    <div className="w-full min-h-full flex justify-center items-center">
      <img
        src={heroImg}
        alt="heroImg"
        className="w-full h-screen md:object-cover object-cover"
      />
      <div className="absolute flex flex-col  justify-center items-center">
        <h1 className=" md:text-[5vw] text-[15vw] font-bold">AGS Sofas</h1>
        <h4 className=" md:text-[5vw] text-[8vw] font-semibold "> Luxury furnitures</h4>
        <h4 className=" md:text-[5vw] text-[8vw] font-semibold "> that everyone loves</h4>
        <div className="flex justify-between items-center">
          <button className="  md:w-[8rem] text-sm md:text-lg w-[7rem] md:p-2 p-2 m-1 rounded-[40px] text-white bg-[#232323]">
            more info
          </button>
          <button className="  md:w-[8rem] text-sm md:text-lg w-[7rem] md:p-2 p-2 m-1 rounded-[40px] text-black bg-[#DBC369]">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
