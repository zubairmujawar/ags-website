import React from "react";
import { motion } from "framer-motion";
// import { useRef, useState, useEffect } from 'react';

const ProductsPage = ({ index }) => {
  const products = [
    {
      id: 1,
      title: "Premium sofa",
      price: "₹15900",
      imgSrc:
        "https://i0.wp.com/shopps.in/wp-content/uploads/2023/07/H148c1d4c98ec48fd8abc4ee54c9d95e50.jpg?fit=750%2C750&ssl=1",
    },
    {
      id: 2,
      title: "Interior",
      price: "₹16750",
      imgSrc:
        "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf_105762-2224.jpg?t=st=1711217288~exp=1711220888~hmac=e6fc6266244f90a85df243d33b23d0072f55f9b7ba0a996615b5d3306ad26ea1&w=1380",
    },
    {
      id: 3,
      title: "Furnitures",
      price: "₹17750",
      imgSrc:
        "https://www.smartwoodfurniture.com/wp-content/uploads/2023/07/gracia-banner.jpg",
    },
    {
      id: 6,
      title: "Curtains",
      price: "₹1750",
      imgSrc:
        "https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv_105762-2149.jpg?t=st=1711218485~exp=1711222085~hmac=ac0f3d04178638473c8de4a0c42d8c6dc8f26e4547726cb41f8c25ac3b517ae1&w=1380",
    },
    {
      id: 5,
      title: "Headboard",
      price: "₹12750",
      imgSrc:
        "https://img.freepik.com/free-photo/luxurious-modern-bedroom-with-comfortable-bedding-elegant-decor-generated-by-ai_188544-29870.jpg?t=st=1711217053~exp=1711220653~hmac=7d997ba326ae6f1951c9d190070c4998b6cb2c9bcfb626c7e752761db64e258c&w=1380",
    },
    {
      id: 4,
      title: "Chaires",
      price: "₹22750",
      imgSrc:
        "https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg?w=740&t=st=1711131773~exp=1711132373~hmac=f1373c14c74be2b3ac51456c5d126f5e71cb593fa63fdf565b0ca3c34129f341",
    },
  ];
  return (
    <div className="w-full  bg-[#1B383A] text-white">
      <div className="max-w-[1440px] m-auto text-center p-2">
        <div className=" text-center p-2 mx-6 my-5 rounded-lg">
          <h2 className="font-serif text-2xl">
            "Indulge in ultimate comfort with our exquisite selection of sofas,
            crafted to redefine luxury and elevate your living space."
          </h2>
        </div>
        <motion.div className=" -red-400   flex flex-wrap gap-2 mx-auto  justify-center max-w-[90vw]">
          {products.map((item) => (
            <div
              className="md:w-[28rem] p-2 m-2 mx-auto hover:scale-105 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 100 }}
              animate="visible"
              transition={{
                delay: index * 0.25,
                ease: "easeIn",
                duration: 0.5,
              }}
              viewport={true}
              key={item.id}
            >
              <img
                src={item.imgSrc}
                alt="img"
                className="object-cover md:w-70 rounded-lg aspect-[4/3] "
              />
              <h2 className="text-2xl">{item.title}</h2>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default ProductsPage;
