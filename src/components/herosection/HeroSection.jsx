import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
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
                  src="https://i.ibb.co/4KtRnPV/interior.jpg"
                  alt="Image 1"
                  className="aspect-[5/3] rounded-lg"
                />
              </swiper-slide>
              <swiper-slide>
                <img
                  src="https://i.ibb.co/DfqQCbQ/furniture.jpg"
                  alt="Image 1"
                  className="aspect-[5/3] rounded-lg"
                />
              </swiper-slide>
              {/* <swiper-slide>Slide ...</swiper-slide> */}
            </swiper-container>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
