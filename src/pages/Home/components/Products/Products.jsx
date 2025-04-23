import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Prosthetics",
    description:
      "We provide advanced prosthetic solutions designed to restore mobility, confidence, and independence. From high-performance microprocessor knees like the C-Leg 4 to innovative socket designs, our focus is on comfort, function, and a personalized fit.",
    imageUrl: "section/img1.png",
  },
  {
    title: "Exoskeletons",
    description:
      "For more than a decade, SUITX by Ottobock has been developing innovative solutions to make workplaces in manufacturing, logistics, and the trades more ergonomic. Our mission is to minimize physical strain, create healthier working conditions, and increase productivity.",
    imageUrl: "section/img2.png",
  },
  {
    title: "Ballet",
    description:
      "For more than a decade, SUITX by Ottobock has been developing innovative solutions to make workplaces in manufacturing, logistics, and the trades more ergonomic. Our mission is to minimize physical strain, create healthier working conditions, and increase productivity.",
    imageUrl: "s/3.avif",
  },
];

const Products = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-16 w-[85%] m-auto py-10">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex  flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={section.imageUrl}
              alt={section.title}
              className="w-full md:w-1/2  shadow-md rounded-full"
            />
            <div className="md:w-1/2  px-4">
              <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
              <p className="text-lg text-gray-800">{section.description}</p>
              <div>
                <h2 className="text-2xl font-bold mt-5 mb-5">What We Offer</h2>
                <ul className="flex flex-col gap-3 list-disc text-gray-800 pl-5 space-y-1">
                  <li>Lower and upper limb prosthetics</li>
                  <li> Microprocessor-controlled knees and ankles</li>
                  <li> Lightweight, durable socket technologys</li>
                  <li> Custom solutions tailored to your lifestyle</li>
                </ul>
              </div>
              <button className="bg-[#00157a] mt-5 p-3 rounded-full text-white font-medium">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Products;
