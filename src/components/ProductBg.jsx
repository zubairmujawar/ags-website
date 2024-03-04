import React from 'react'
import productImg from '../assets/products.png'
const ProductBg = () => {
  return (
    <div className="w-full min-h-full flex justify-center items-center">
    <img
      src={productImg}
      alt="heroImg"
      className="w-full h-[80vh] md:object-cover object-cover"
    />
    <div className="absolute flex flex-col gap-3 justify-center items-center">
      <h1 className=" md:text-6xl text-3xl text-white font-bold">Home decor items</h1>
      <h4 className=" md:text-4xl text-2xl  text-white font-semibold ">Find your new favorites</h4>
      <div className="flex justify-between items-center">
        {/* <button className="  md:w-[8rem] text-sm md:text-lg w-[7rem] md:p-2 p-2 m-1 rounded-[40px] text-black bg-[#DBC369]">
          Shop now
        </button> */}
        <button className="button">Shop Now</button>
      </div>
    </div>
  </div>
  )
}

export default ProductBg
