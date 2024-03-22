import React from "react";
import { motion } from "framer-motion";
// import { useRef, useState, useEffect } from 'react';

const ProductsPage = ({ index }) => {
  const products = [
    {
      id: 1,
      title: "CLOUD SOFA 2-seater",
      price: "₹15750",
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=480,h=320,fit=crop/YanMG1xnrxiz3rbZ/untitled-design-m2WlgoVrK1tED482.png",
    },
    {
      id: 2,
      title: "CLOUD SOFA 2-seater",
      price: "₹15900",
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=480,h=320,fit=crop/YanMG1xnrxiz3rbZ/untitled-design-m2WlgoVrK1tED482.png",
    },
    {
      id: 3,
      title: "CLOUD SOFA 2-seater",
      price: "₹16750",
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=480,h=320,fit=crop/YanMG1xnrxiz3rbZ/untitled-design-m2WlgoVrK1tED482.png",
    },
    {
      id: 4,
      title: "CLOUD SOFA 2-seater",
      price: "₹17750",
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=480,h=320,fit=crop/YanMG1xnrxiz3rbZ/untitled-design-m2WlgoVrK1tED482.png",
    },
    {
      id: 5,
      title: "CLOUD SOFA 2-seater",
      price: "₹22750",
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=480,h=320,fit=crop/YanMG1xnrxiz3rbZ/untitled-design-m2WlgoVrK1tED482.png",
    },
    {
      id: 6,
      title: "CLOUD SOFA 2-seater",
      price: "₹12750",
      imgSrc:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=480,h=320,fit=crop/YanMG1xnrxiz3rbZ/untitled-design-m2WlgoVrK1tED482.png",
    },
  ];
  return (
    <div className="w-full  bg-[#1B383A] text-white">
      <div className="max-w-[1440px] m-auto text-center p-2">
        <div className=" text-center p-2 mx-6 my-5 rounded-lg">
          <h2 className="font-serif text-2xl">
            Indulge in ultimate comfort with our exquisite selection of sofas,
            crafted to redefine luxury and elevate your living space.
          </h2>
        </div>
        <motion.div
          className=" -red-400   flex flex-wrap gap-2 mx-auto  justify-center max-w-[90vw]"
          // variants={variants}

          // animate={{ opacity: 1, y: 0 }}
          // initial="hidden"
          // whileInView="visible"
        >
          {products.map((item) => (
            <div
              className="md:w-[28rem]   -black   p-2 m-2 mx-auto hover:scale-105 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 100 }}
              animate="visible"
              transition={{
                delay: index * 0.25,
                ease: "easeIn",
                duration: 0.5,
              }}
              viewport={{ amount: 0 }}
              key={item.id}
            >
              <img
                src={item.imgSrc}
                alt="img"
                className="object-cover md:w-70 rounded-lg "
              />
              <h2>{item.title}</h2>
              <h3>{item.price}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default ProductsPage;
