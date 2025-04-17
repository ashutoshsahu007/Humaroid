import React from "react";
import { Award, Users, Clock, ThumbsUp } from "lucide-react";

const statsData = [
  {
    icon: <ThumbsUp className="text-white h-10 w-10" />,
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    icon: <Users className="text-white h-10 w-10" />,
    value: "1000+",
    label: "Women Represented",
  },
  {
    icon: <Award className="text-white h-10 w-10" />,
    value: "15+",
    label: "Years of Experience",
  },
  {
    icon: <Clock className="text-white h-10 w-10" />,
    value: "24/7",
    label: "Support Available",
  },
];

const Stats = () => {
  return (
    <section className="py-8 bg-[#4e9bc4]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                {stat.value}
              </h3>
              <p className="text-white">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
