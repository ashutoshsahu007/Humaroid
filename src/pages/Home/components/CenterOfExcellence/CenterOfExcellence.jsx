import { motion } from "framer-motion";

const specialties = [
  { title: "Cardiac Sciences", icon: "💓" },
  { title: "Neurosciences", icon: "🧠" },
  { title: "Orthopaedics", icon: "🦴" },
  { title: "Oncology", icon: "🎗️" },
  { title: "Nephrology & Urology", icon: "🩺" },
  { title: "Gastroenterology", icon: "🥼" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      delay: i * 0.1,
    },
  }),
};

export default function CenterOfExcellence() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-blue-900 text-center">
          Our Centers of Excellence
        </h2>
        <p className="text-gray-600 mb-12">
          World-class expertise across a broad range of specialties.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {specialties.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
