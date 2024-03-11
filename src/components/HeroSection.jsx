import heroImg from "../assets/hero.png";
import React, { useEffect, useRef } from "react";
const HeroSection = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    content.classList.add("fade-in");
  }, []);

  return (
    <div className="w-full md:h-full h-[80vh] flex justify-center items-start z-2">
      <img
        src={heroImg}
        alt="heroImg"
        //  object-cover
        className="w-full  object-cover
        h-screen  heroImg z-5"
      />
      <div
        ref={contentRef}
        className="absolute flex flex-col  justify-start pt-20 items-center opacity-0"
      >
        <h1 className="md:text-7xl text-[10vw] text-black font-bold">
          AGS Sofas
        </h1>
        <h4 className="md:text-[3vw] text-[8vw] font-semibold text-[#DBC369] mr-dafoe-regular ">
          Luxury furnitures
        </h4>
        <h4 className="md:text-[3vw] text-2xl font-semibold ">
          that everyone loves
        </h4>
        <div className="flex justify-between items-center">
          {/* <button className="md:w-[8rem] text-sm md:text-lg py=3 w-[7rem]  p-2 m-1 rounded-[40px] text-white bg-[#232323]">
            More info
          </button> */}
          <div className="flex justify-between mt-4 items-center">
            <button className="button">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
