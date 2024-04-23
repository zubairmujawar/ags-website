import { Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import video from "../assets/pexels.mp4";
import { motion } from "framer-motion";

const HeroSection = () => {
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
  return (
    <>
      {/* Home Section */}
      <section className="md:flex flex-wrap items-center py-3 my-3 md:justify-center justify-around h-[35rem]">
        {/* <!-- Information Part (Left Side) --> */}
        <div className="w-full md:w-1/2 px-4 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={{
              show: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            className="text-center md:text-left ml-4"
          >
            <h1 className="md:text-5xl text-3xl font-bold mb-2">
              
              <span className="text-[#dbc369] md:text-5xl text-3xl">
                AGS Sofas
              </span>
            </h1>
            <h3 className="md:text-4xl text-2xl font-semibold text-gray-700 mb-2">
              Quality You Can Trust, Style You'll Love
            </h3>
            <p className="text-gray-500 md:text-[1.5rem] text-[1rem]">
              "Design your home exactly how you imagined it. We build your
              vision."
            </p>
            <Link to="/products">
              <button className="button m-2">Get started</button>
            </Link>
          </motion.div>
        </div>

        {/* <!-- Image Part (Right Side) --> */}
        <div className="w-full md:w-1/2 px-4 mt-16 md:mt-0">
          <div id="slider" className="relative overflow-hidden">
            <swiper-container
              className="swiper"
              spaceBetween={50}
              effect="fade"
              loop={true}
              grabCursor={true}
              autoplay={true}
              delay={2000}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <swiper-slide>
                <img
                  src="https://i.ibb.co/1m3DCcj/roberto-nickson-tle-CJi-DOri0-unsplash.jpg"
                  alt="Image 1"
                  className="aspect-[5/3] rounded-lg"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src='https://i.ibb.co/4KtRnPV/interior.jpg'
                  alt="Image 1"
                  className="aspect-[5/3] rounded-lg"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src='https://i.ibb.co/DfqQCbQ/furniture.jpg'
                  alt="Image 1"
                  className="aspect-[5/3] rounded-lg"
                />
              </swiper-slide>
              {/* <swiper-slide>Slide ...</swiper-slide> */}
            </swiper-container>
          </div>
        </div>
      </section>

      <div className="w-full h-15 py-4 bg-[#124044] md:block inline-block text-white md:text-4xl text-2xl z-10 text-center ">
        <h1>Our Products</h1>
      </div>

      {/* Product section */}
      <section className="w-full h-auto min-h-[30rem] flex justify-center items-center relative">
        <img
          src={
            "https://i.ibb.co/dkVYhGw/photo-1571460.jpg"
          }
          alt="heroImg"
          className="w-full md:h-[35rem] h-[30rem] md:object-cover object-cover opacity-[0.8]"
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.1 }}
          variants={{
            show: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          className="absolute flex flex-col gap-3 justify-center items-center opacity-0"
        >
          <h1 className="md:text-5xl text-2xl text-center text-black font-bold">
            "Unlock the Potential of Your Home"
          </h1>
          <h4 className="md:text-4xl text-2xl text-gray-800 font-semibold">
            Find your new favorites
          </h4>
          <div className="flex justify-between items-center">
            <Link to="/products">
              <button className="bg-transparent hover:bg-[#C1A362] rounded-full text-black font-semibold hover:text-white py-2 px-4 border border-[#262115] hover:border-transparent">
                Shop now
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      <div className="w-full h-15 py-4 bg-[#124044] md:block inline-block text-white md:text-4xl text-2xl z-10 text-center ">
        <h1>About us</h1>
      </div>

      {/* About section */}

      <section className="md:h-[35rem] h-auto min-h-[30rem] bg-[#124044] flex justify-center items-center overflow-hidden ">
        <video
          src={video}
          className="w-full h-[30rem]   absolute my-9 z-[5] overflow-hidden object-cover"
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
          <div className="absolute bg-[#c0c0c08b] w-[100vw] h-[30rem] z-[6]"></div>
          <motion.h2 className="md:text-[4rem] text-[1.5rem] z-[7]  font-bold">
            Ags sofa's and Interoirs
          </motion.h2>
          <motion.p className="md:text-xl text-[1rem] z-[7] font-semibold text-[#082729] ">
            "Design your home exactly how you imagined it. We build your vision."
          </motion.p>
        </motion.div>
      </section>
      {/* Projects section */}
      <section className="w-full h-auto min-h-[30rem] project-div py-2 md:flex justify-center items-center">
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
              src='https://i.ibb.co/n3HNGd1/project-Img1.png'
              alt="projectImg1"
              className="shadow-xl rounded-xl projects-card"
            />
            <h2 className="md:text-2xl text-xl font-bold text-white my-2">
              About AGS Sofas
            </h2>
            <h4 className="md:text-xl text-lg text-white">
              "Quality You Can Trust, Style You'll Love"
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
              src='https://i.ibb.co/2SQxGZj/project-Img2.png'
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
      </section>
    </>
  );
};

export default HeroSection;
