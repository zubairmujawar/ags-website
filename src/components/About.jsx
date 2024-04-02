import React from "react";
import video from "../assets/pexels.mp4";
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
            <div className="absolute bg-[#c0c0c08b] w-full h-[30rem] z-[6]"></div>

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
      <div class="bg-gray-100 py-12">
        <div class="max-w-4xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1 }}
            variants={{
              show: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            class="text-3xl font-semibold mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1 }}
            variants={{
              show: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            class="flex flex-wrap px-5 justify-center my-3 flex-col gap-3 items-center mb-8"
          >
            <img
              src="https://images.unsplash.com/photo-1617615181070-ab4788da6d03?auto=format&fit=crop&w=400&h=384"
              alt="Why Choose Us"
              class=" w-32 h-32 rounded-full shadow-lg mr-4"
            />
            <h3 className="font-semibold">Quality wood</h3>
            <p class="text-sm text-gray-800">
              Pine Wood Frame: A pine frame offers excellent durability and
              resistance to weather and moisture. Pine wood is a tropical
              hardwood known for its strength and natural oils that protect it
              from decay and insect damage. Pine frames are commonly used in
              outdoor sofas but can also be an excellent choice for indoor
              furniture, especially in spaces where a touch of rustic elegance
              is desired.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1 }}
            variants={{
              show: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            class="flex flex-wrap justify-center px-5 flex-col gap-3 items-center mb-8"
          >
            <img
              src="https://images.unsplash.com/photo-1544164560-adac3045edb2?auto=format&fit=crop&w=400&h=384"
              alt="Why Choose Us"
              class="w-32 h-32 rounded-full shadow-lg mr-4"
            />
            <h3 className="font-semibold">Best Staff </h3>
            <p class="text-sm text-gray-800">
              We have the best staff  to build furniture, ensuring exceptional
              craftsmanship and attention to detail. Our commitment to using the
              highest quality products guarantees the durability and longevity
              of our furniture pieces.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1 }}
            variants={{
              show: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            class="flex flex-wrap justify-center px-5 flex-col gap-3 items-center mb-8"
          >
            <img
              src="https://www.livingdesignsfurniture.com/wp-content/uploads/2022/02/fabric-scaled-1-2048x1366.webp"
              alt="Why Choose Us"
              class="w-32 h-32 rounded-full shadow-lg mr-4"
            />
            <h3 className="font-semibold">Cotton fabric</h3>
            <p class="text-sm text-gray-800">
              Cotton fabric is a natural and widely used material known for its
              softness, breathability, and comfort. It is highly versatile and
              can be woven into various textures and weights, making it suitable
              for a wide range of applications, including apparel, bedding, and
              upholstery. Cotton fabric is hypoallergenic, absorbent, and easy
              to care for, making it a popular choice for everyday use.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
