import { Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import projectImg1 from "../assets/projectImg1.png";
import projectImg2 from "../assets/projectImg2.png";
import video from "../assets/video.mp4";
import { motion } from "framer-motion";
const HeroSection = () => {
  const fadeUpAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    // viewport:{ once: false },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.9,
      },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const isInViewport = () => {
    const rect = contentRef.current.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleScroll = () => {
    setIsVisible(isInViewport());
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const content = contentRef.current;
      content.classList.add("fade-in");
    }
    // Remove fade-in class when component unmounts
    return () => {
      const content = contentRef.current;
      content.classList.remove("fade-in");
    };
  }, [isVisible]);

  return (
    <>
      {/* Home Section */}
      <div className="w-full md:h-full h-[80vh] flex justify-center items-start z-2">
        <img
          src="https://i.ibb.co/Vx44MGM/products.png"
          alt="heroImg"
          className="w-full  object-cover h-screen  heroImg z-5"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpAnimation}
          animate="show"
          className="absolute flex flex-col  justify-start pt-20 items-center opacity-0"
        >
          <motion.h1
            variants={fadeUpAnimation}
            className="md:text-7xl text-[10vw] text-black font-bold"
          >
            AGS Sofas
          </motion.h1>
          <motion.h4 className="md:text-[3vw] text-[8vw] font-semibold text-[#DBC369] mr-dafoe-regular ">
            Luxury furnitures
          </motion.h4>
          <motion.h4 className="md:text-[3vw] text-2xl font-semibold ">
            that everyone loves
          </motion.h4>
          <motion.div className="flex justify-between items-center">
            <div className="flex justify-between mt-8 items-center">
              <Link to="/products">
                <button className="button" href="#">
                  Get started
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* About section */}
      <div className="h-[90vh] bg-gradient-to-r from-green-800 to-green-900 flex justify-center items-center overflow-hidden ">
        <video
          src={video}
          className="w-full h-[90vh]  absolute z-[5] overflow-hidden object-cover"
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
          <motion.h2 className="md:text-[6rem] text-[1.5rem] font-bold">
            Ags sofa's and Interoirs
          </motion.h2>
          <motion.p className="md:text-2xl text-[16px] font-semibold">
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
      {/* Product section */}
      <div className="w-full min-h-full flex justify-center items-center relative">
        <img
          src={
            "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="heroImg"
          className="w-full h-[80vh] md:object-cover object-cover opacity-[0.8]"
        />
        <div
          ref={contentRef}
          className="absolute flex flex-col gap-3 justify-center items-center opacity-0"
        >
          <h1 className="md:text-6xl text-3xl text-black font-bold">
            Home decor items
          </h1>
          <h4 className="md:text-4xl text-2xl text-black font-semibold">
            Find your new favorites
          </h4>
          <div className="flex justify-between items-center">
            <Link to="/products">
            <button className="bg-transparent hover:bg-[#C1A362] rounded-full text-black font-semibold hover:text-white py-2 px-4 border border-[#262115] hover:border-transparent">
              Shop now
            </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Projects section */}
      <div className="w-full min-h-[80vh] project-div py-2 md:flex justify-center items-center">
        <div className="max-w-[1440px] mx-auto h-full p-2   md:flex justify-center  gap-3 ">
          <motion.div
            className="md:w-[50%] p-4 h-[80%]  flex flex-col items-start "
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            variants={{
              show: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
          >
            <img
              src={projectImg1}
              alt="projectImg1"
              className="shadow-xl rounded-xl projects-card"
            />
            <h2 className="md:text-2xl text-xl font-bold text-white my-2">
              About AGS Sofas
            </h2>
            <h4 className="md:text-xl text-lg text-white">
              It is a brand which is bound for quality.
            </h4>
            <Link to="/contact" onClick={scrollToTop}>
              <button className="button my-2">more info</button>
            </Link>
          </motion.div>
          <motion.div
            className="md:w-[50%] p-4 h-[80%] flex  flex-col items-start "
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            variants={{
              show: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
          >
            <img
              src={projectImg2}
              alt="projectImg2"
              className="shadow-xl rounded-xl projects-card"
            />
            <h2 className="md:text-2xl text-xl font-bold text-white my-2">
              Projects
            </h2>
            <h4 className="md:text-xl text-lg text-white">
              Check some of our past projects.
            </h4>
            <Link to="/products" onClick={scrollToTop}>
              <button className="button my-2">more info</button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
