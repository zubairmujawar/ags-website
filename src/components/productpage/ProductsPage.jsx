import React from "react";
import { motion } from "framer-motion";
const ProductsPage = ({ index }) => {
  const products = [
    {
      id: 1,
      title: "Premium sofa",
      price: "₹15900",
      imgSrc: 'https://i.ibb.co/3hsNJnM/sofa.jpg',
    },
    {
      id: 2,
      title: "Interior",
      price: "₹16750",
      imgSrc: 'https://i.ibb.co/4KtRnPV/interior.jpg',
    },
    {
      id: 3,
      title: "Furnitures",
      price: "₹17750",
      imgSrc: 'https://i.ibb.co/DfqQCbQ/furniture.jpg',
    },
    {
      id: 6,
      title: "Curtains",
      price: "₹1750",
      imgSrc: 'https://i.ibb.co/ysyMtp3/curtain.jpg',
    },
    {
      id: 5,
      title: "Headboard",
      price: "₹12750",
      imgSrc: 'https://i.ibb.co/8MkrTBf/headboard-new.jpg',
    },
    {
      id: 4,
      title: "Chairs",
      price: "₹22750",
      imgSrc: 'https://i.ibb.co/0YkNHzW/chairs.jpg',
    },
  ];
  return (
    <div className="w-full  bg-[#e5fdfe] text-black">
      <div className="max-w-[1440px] md:w-[80vw] m-auto text-center p-2">
        <div className=" text-center p-2 mx-6 my-5 rounded-lg">
          <h2 className="font-serif text-2xl">
            "Design your home exactly how you imagined it. We build your vision. Crafted with you in mind."
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
              <h2 className="md:text-3xl text-2xl">{item.title}</h2>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default ProductsPage;
