import React, { useRef, useEffect, useState } from "react";
import productImg from "../assets/products.png";

const ProductBg = () => {
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
    <div className="w-full min-h-full flex justify-center items-center relative">
      <img
        src={productImg}
        alt="heroImg"
        className="w-full h-[80vh] md:object-cover object-cover"
      />
      <div
        ref={contentRef}
        className="absolute flex flex-col gap-3 justify-center items-center opacity-0"
      >
        <h1 className="md:text-6xl text-3xl text-white font-bold">
          Home decor items
        </h1>
        <h4 className="md:text-4xl text-2xl text-white font-semibold">
          Find your new favorites
        </h4>
        <div className="flex justify-between items-center">
          <button className="button">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductBg;
