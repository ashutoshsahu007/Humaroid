import React, { useState } from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Prosthetics",
    description:
      "We provide advanced prosthetic solutions designed to restore mobility, confidence, and independence. From high-performance microprocessor knees like the C-Leg 4 to innovative socket designs, our focus is on comfort, function, and a personalized fit.",
    imageUrl: "section/img1.png",
    offer: [
      "Lower and upper limb prosthetics",
      "Microprocessor-controlled knees and ankles",
      "Lightweight, durable socket technologys",
      "Custom solutions tailored to your lifestyle",
    ],
  },
  {
    title: "Physiotherapy ",
    description:
      "Physiotherapy is a specialized form of rehabilitation that restores movement, function, and quality of life through hands-on care, exercise, and proven techniques. Whether you're recovering from injury, managing a chronic condition, or improving mobility with age, our tailored programs help you move better—one step at a time.",
    imageUrl: "section/img2.png",
    offer: [
      "Post-surgical recovery",
      "Chronic pain and injury management",
      "Neurological and orthopedic conditions",
      "Mobility and strength training",
      "Holistic care for physical and emotional well-being",
    ],
  },
  {
    title: "Rehabilitation Products",
    description:
      "We provide a curated range of rehabilitation products designed to enhance comfort, safety, and independence. From mobility aids to ergonomic tools, our solutions support your daily routine—at home, at work, and on the go.",
    imageUrl: "s/3.avif",
    offer: [
      "Walking aids (canes, walkers, crutches)",
      "Wheelchairs and seating solutions",
      "Bathroom safety equipment",
      "Daily living aids and adaptive tools",
      "Post-surgical and therapy supports",
    ],
  },
  {
    title: "Orthotics",
    description:
      "We provide expertly crafted orthotic solutions designed to relieve pain, restore function, and support better movement. Orthotics are external devices that support joints and muscles, improve alignment, and help prevent or manage injury. Whether custom-made or off-the-shelf, they’re tailored to your body and your goals.",
    imageUrl: "s/3.avif",
    offer: [
      "Plantar fasciitis",
      "Foot and ankle pain",
      "Tendon and ligament injuries",
      "Fractures",
      "Arthritis (Osteo & Rheumatoid)",
      "Diabetes-related foot issues",
      "Neurological conditions: Stroke, MS, CP, Polio, Spina Bifida, and more",
    ],
  },
];

const Products = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleOpenIndex = (index) => setOpenIndex(index);

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
                {openIndex === index && (
                  <>
                    <h2 className="text-2xl font-bold mt-5 mb-5">
                      What We Offer
                    </h2>
                    <ul className="flex flex-col gap-3 list-disc text-gray-800 pl-5 space-y-1">
                      {section.offer.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <button
                onClick={() => handleOpenIndex(index)}
                className="bg-[#00157a] hover:cursor-pointer mt-5 p-3 rounded-full text-white font-medium"
              >
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
