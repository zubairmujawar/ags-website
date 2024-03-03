import React from "react";
import projectImg1 from "../assets/projectImg1.png";
import projectImg2 from "../assets/projectImg2.png";
const Projects = () => {
  return (
    <div className="w-full min-h-[80vh] project-div py-2 md:flex justify-center items-center">
      <div className="max-w-[1440px] mx-auto h-full p-2   md:flex justify-center  -black gap-3 ">
        <div className="md:w-[50%] p-4 h-[80%]  flex flex-col items-start ">
          <img
            src={projectImg1}
            alt="projectImg1"
            className="shadow-xl rounded-xl "
            style={{boxShadow: '7px 7px 7px'}}
          />
          <h2 className="md:text-2xl text-xl font-bold text-white my-2">About AGS Sofas</h2>
          <h4 className="md:text-xl text-lg text-white">
            It is a brand which is bound for quality.
          </h4>
          {/* <button className=" text-sm md:text-lg md:w-[7rem] md:p-1 p-1 m-1 rounded-[30px] text-black bg-[#DBC369]">
            more info
          </button> */}
          <button className="button my-2">more info</button>
        </div>
        <div className="md:w-[50%] p-4 h-[80%] flex  flex-col items-start ">
          <img
            src={projectImg2}
            alt="projectImg2"
            className="shadow-xl rounded-xl"
            style={{boxShadow: '7px 7px 7px'}}
          />
          <h2 className="md:text-2xl text-xl font-bold text-white my-2">Projects</h2>
          <h4 className="md:text-xl text-lg text-white">
            Check some of our past projects.
          </h4>
          {/* <button className=" text-sm md:text-lg md:w-[7rem] md:p-1 p-1 m-1 rounded-[30px] text-black bg-[#DBC369]">
            more info
          </button> */}
          <button className="button">more info</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
