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
        src={'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
        alt="heroImg"
        className="w-full h-[80vh] md:object-cover object-cover opacity-[0.8]"
      />
      <div
        ref={contentRef}
        className="absolute flex flex-col gap-3 justify-center items-center opacity-0"
      >
        <h1 className="md:text-6xl text-3xl text-black font-bold">
          Home decor items
        </h1>
        <h4 className="md:text-4xl text-2xl text-black font-semibold">
          Find your new favorites
        </h4>
        <div className="flex justify-between items-center">
          <button className="project-button">
            <button class="full-rounded ">
              <span>Shop Now</span>
              <div class="border full-rounded"></div>
            </button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBg;
