import { motion } from "framer-motion";
const ProductBg = () => {
  return (
    <div className="w-full min-h-full flex justify-center items-center relative">
      <img
        src={
          "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt="heroImg"
        className="w-full h-[80vh] md:object-cover object-cover opacity-[0.8]"
      />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.1 }}
        variants={{
          show: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        className="absolute flex flex-col gap-3 justify-center items-center opacity-0"
      >
        <h1 className="md:text-6xl text-3xl text-black font-semibold">
          Home decor items
        </h1>
        <h4 className="md:text-4xl text-2xl text-black font-semibold">
          Find your new favorites
        </h4>
        <div className="flex justify-between items-center">
          <button className="project-button">
            <button className="hover:button border border-black rounded-xl p-2 ">
              <span>Shop Now</span>
            </button>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductBg;
