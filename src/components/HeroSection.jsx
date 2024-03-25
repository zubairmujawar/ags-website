import { Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import projectImg1 from "../assets/projectImg1.png";
import projectImg2 from "../assets/projectImg2.png";
import curtain from "../assets/curtain.jpg";
import inrerior from "../assets/interior.jpg";
import furniture from "../assets/furniture.jpg";
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
      <section className="md:flex flex-wrap items-center py-3 justify-center md:h-[35rem]">
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
            className="text-center md:text-left"
          >
            <h1 className="md:text-5xl text-3xl font-bold mb-2">
              Welcome to <br />
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
        <div className="w-full md:w-1/2 px-4 ">
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
                  src={curtain}
                  alt="Image 1"
                  className="aspect-[5/3] rounded-lg"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src={inrerior}
                  alt="Image 1"
                  className="aspect-[5/3] rounded-lg"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src={furniture}
                  alt="Image 1"
                  className="aspect-[5/3] rounded-lg"
                />
              </swiper-slide>
              {/* <swiper-slide>Slide ...</swiper-slide> */}
            </swiper-container>
          </div>

          {/* <img
          src="https://www.milindpai.com/wp-content/uploads/2023/03/maxresdefault.jpg"
          alt="heroImg"
          className="w-full  object-cover aspect-[8/5]  heroImg z-5 rounded-md"
        /> */}
        </div>
      </section>

      <div className="w-full h-15 py-4 bg-[#124044] md:block inline-block text-white md:text-4xl text-2xl z-10 text-center ">
        <h1>Our Products</h1>
      </div>

      {/* Product section */}
      <div className="w-full min-h-full flex justify-center items-center relative">
        <img
          src={
            "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
          <h1 className="md:text-6xl text-2xl text-center text-black font-bold">
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
      </div>

      <div className="w-full h-15 py-4 bg-[#124044] md:block inline-block text-white md:text-4xl text-2xl z-10 text-center ">
        <h1>About us</h1>
      </div>

      {/* About section */}

      <div className="md:h-[35rem] h-[30rem] bg-[#124044] flex justify-center items-center overflow-hidden ">
        <video
          src={video}
          className="w-full h-[30rem]  absolute my-9 z-[5] overflow-hidden object-cover"
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
          <motion.h2 className="md:text-[5rem] text-[1.5rem] font-bold">
            Ags sofa's and Interoirs
          </motion.h2>
          <motion.p className="md:text-2xl text-[16px] font-semibold">
            "Welcome to our world of furniture and interior design! At Ags
            sofa's, we believe that every home deserves to be a sanctuary of
            style and comfort. With our passion for craftsmanship and attention
            to detail, we curate a diverse collection of furniture pieces and
            decor accents that blend functionality with timeless elegance. Let
            us help you transform your house into a home that reflects your
            unique personality and celebrates the art of living beautifully."
          </motion.p>
        </motion.div>
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
