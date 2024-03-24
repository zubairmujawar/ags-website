import React from "react";
import video from "../assets/video.mp4";
import { motion } from "framer-motion";
const About = () => {
  // const fadeUpAnimation = {
  //     hidden:{
  //         opacity: 0,
  //         y:100
  //     },
  //     // viewport:{ once: false },
  //     show:{
  //         opacity:1,
  //         y:0,
  //         transition:{
  //             staggerChildren:0.8,
  //             duration:0.8
  //         },
  //     }
  // }
  return (
    <div className="h-[80vh] bg-gradient-to-r bg-[#e5fdfe] flex justify-center items-center overflow-hidden ">
      {/* <img src="https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" className='w-full h-full object-cover aspect-[10/8] absolute z-[5]' /> */}
      <video
        src={video}
        className="w-full h-[80vh]  absolute z-[5] overflow-hidden object-cover"
        muted
        loop
        autoPlay
      ></video>
      {/* <iframe
        width="420"
        height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1" className="w-full h-[80vh]  absolute z-[5] overflow-hidden object-cover"
      ></iframe> */}
      <motion.div
        className="z-[6]  flex flex-col justify-center md:gap-4 items-center text-black max-w-[1440px] px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.1 }}
        variants={{
          show: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
      >
        <motion.h2 className="md:text-[6rem] text-[1.5rem] font-bold">
          Ags sofa's and Interoirs
        </motion.h2>
        <motion.p className="md:text-2xl text-[16px] font-semibold">
          "Welcome to our world of exquisite furniture and interior design! At
          Ags sofa's, we believe that every home deserves to be a sanctuary of
          style and comfort. With our passion for craftsmanship and attention to
          detail, we curate a diverse collection of furniture pieces and decor
          accents that blend functionality with timeless elegance. Let us help
          you transform your house into a home that reflects your unique
          personality and celebrates the art of living beautifully."
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
