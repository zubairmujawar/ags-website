import React from "react";
import video from "../../assets/pexels.mp4";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>

      <div className="h-[80vh] bg-gradient-to-r bg-[#e5fdfe] flex justify-center items-center overflow-hidden ">
        <video
          src={video}
          className="w-full h-[80vh]  absolute z-[5] overflow-hidden object-cover"
          muted
          loop
          autoPlay
        ></video>
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
            <div className="absolute bg-[#c0c0c08b] w-full h-[25rem] md:h-[30rem] z-[6]"></div>

          <motion.h2 className="md:text-[4rem] text-[1.5rem] z-[7] font-semibold">
            Ags sofa's and Interoirs
          </motion.h2>
          <motion.p className="md:text-xl text-sm z-[7]">
            "Welcome to our world of exquisite furniture and interior design! At
            Ags sofa's, we believe that every home deserves to be a sanctuary of
            style and comfort. With our passion for craftsmanship and attention
            to detail, we curate a diverse collection of furniture pieces and
            decor accents that blend functionality with timeless elegance. Let
            us help you transform your house into a home that reflects your
            unique personality and celebrates the art of living beautifully."
          </motion.p>
        </motion.div>
      </div>

    </>
  );
};

export default About;
