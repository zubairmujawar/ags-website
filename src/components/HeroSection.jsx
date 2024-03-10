import heroImg from "../assets/hero.png";
import React, { useEffect, useRef } from "react";
const HeroSection = () => {
  
  const contentRef = useRef(null);
  
  useEffect(() => {
    const content = contentRef.current;
    content.classList.add("fade-in");
  }, []);

  return (
    <div className="w-full min-h-full flex justify-center items-center ">
      <img
        src={heroImg}
        alt="heroImg"
        //  object-cover
        className="w-full  object-cover
        h-screen  heroImg"
      />
      <div ref={contentRef} className="absolute flex flex-col  justify-center items-center opacity-0">
        <h1 className="md:text-7xl text-4xl text-black font-bold">AGS Sofas</h1>
        <h4 className="md:text-[3vw] text-[8vw] font-semibold text-[#124044] mr-dafoe-regular ">
          Luxury furnitures
        </h4>
        <h4 className="md:text-[3vw] text-2xl font-semibold ">that everyone loves</h4>
        <div className="flex justify-between items-center">
          <button className="md:w-[8rem] text-sm md:text-lg py=3 w-[7rem]  p-2 m-1 rounded-[40px] text-white bg-[#232323]">
            More info
          </button>
          <button className="md:w-[8rem] text-sm md:text-lg w-[7rem] p-2 m-1 rounded-[40px] text-black bg-[#DBC369]">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

    // <div className="w-full min-h-full flex justify-center items-center">
    //   <img
    //     src={heroImg}
    //     alt="heroImg"
    //     className="w-full h-screen md:object-cover object-cover"
    //   />
    //   <div className="absolute flex flex-col  justify-center items-center">
    //     <h1 className="md:text-7xl text-3xl text-black font-bold">AGS Sofas</h1>
    //     <h4 className=" md:text-[3vw] text-[8vw] font-semibold text-[#124044] mr-dafoe-regular "> Luxury furnitures</h4>
    //     <h4 className=" md:text-[3vw] text-[8vw] font-semibold "> that everyone loves</h4>
    //     <div className="flex justify-between items-center">
    //       <button className="  md:w-[8rem] text-sm md:text-lg w-[7rem] md:p-2 p-2 m-1 rounded-[40px] text-white bg-[#232323]">
    //         More info
    //       </button>
    //       <button className="  md:w-[8rem] text-sm md:text-lg w-[7rem] md:p-2 p-2 m-1 rounded-[40px] text-black bg-[#DBC369]">
    //         Get started
    //       </button>
    //     </div>
    //   </div>
    // </div>

export default HeroSection;
