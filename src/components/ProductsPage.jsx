import React from "react";
import { motion } from "framer-motion";
// import { useRef, useState, useEffect } from 'react';

const ProductsPage = ({ index }) => {
  const products = [
    // {
    //   id: 1,
    //   title: "CLOUD SOFA 2-seater",
    //   price: "₹15750",
    //   imgSrc:
    //     "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=480,h=320,fit=crop/YanMG1xnrxiz3rbZ/untitled-design-m2WlgoVrK1tED482.png",
    // },
    {
      id: 2,
      title: "CLOUD SOFA 2-seater",
      price: "₹15900",
      imgSrc:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "CLOUD SOFA 2-seater",
      price: "₹16750",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
    },
    {
      id: 4,
      title: "CLOUD SOFA 2-seater",
      price: "₹17750",
      imgSrc:
        "https://img.freepik.com/free-photo/gray-sofa-living-room-with-copy-space_43614-926.jpg?t=st=1711131265~exp=1711134865~hmac=4ccc28130be99fe55dfce0bf739432424bf4135b2fa2299aad22b1502a1bb2a3&w=1060",
    },
    {
      id: 5,
      title: "CLOUD SOFA 2-seater",
      price: "₹22750",
      imgSrc:
        "https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg?w=740&t=st=1711131773~exp=1711132373~hmac=f1373c14c74be2b3ac51456c5d126f5e71cb593fa63fdf565b0ca3c34129f341",
    },
    {
      id: 6,
      title: "CLOUD SOFA 2-seater",
      price: "₹12750",
      imgSrc:
        "https://img.freepik.com/free-photo/curtain-with-sunlight_1339-4061.jpg?t=st=1711131507~exp=1711135107~hmac=2054e39affbd8ab8af2fc54600813dc28f13067a952b0719879aca92daa7d91d&w=1380",
    },
    {
      id: 7,
      title: "CLOUD SOFA 2-seater",
      price: "₹1750",
      imgSrc:
        "https://img.freepik.com/free-photo/couch-with-colored-cushions-close_1203-324.jpg?t=st=1711131908~exp=1711135508~hmac=9c959a1e1d109590995d0d75a490a328d5ed2a4726fbf58b2775ee2df865b5f4&w=1380",
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
