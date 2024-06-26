import { motion } from "framer-motion";

const MaterialInfo = () => {
  return (
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
            resistance to weather and moisture. Pine wood is a tropical hardwood
            known for its strength and natural oils that protect it from decay
            and insect damage. Pine frames are commonly used in outdoor sofas
            but can also be an excellent choice for indoor furniture, especially
            in spaces where a touch of rustic elegance is desired.
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
            We have the best staff to build furniture, ensuring exceptional
            craftsmanship and attention to detail. Our commitment to using the
            highest quality products guarantees the durability and longevity of
            our furniture pieces.
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
            softness, breathability, and comfort. It is highly versatile and can
            be woven into various textures and weights, making it suitable for a
            wide range of applications, including apparel, bedding, and
            upholstery. Cotton fabric is hypoallergenic, absorbent, and easy to
            care for, making it a popular choice for everyday use.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MaterialInfo;
