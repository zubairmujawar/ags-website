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
        <h1 className="md:text-7xl text-3xl text-black font-bold">AGS Sofas</h1>
        <h4 className=" md:text-[3vw] text-[8vw] font-semibold text-[#124044] mr-dafoe-regular "> Luxury furnitures</h4>
        <h4 className=" md:text-[3vw] text-[8vw] font-semibold "> that everyone loves</h4>
        <div className="flex justify-between items-center">
          <button className="  md:w-[8rem] text-sm md:text-lg w-[7rem] md:p-2 p-1 m-1 rounded-[40px] text-white bg-[#232323]">
            More info
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
