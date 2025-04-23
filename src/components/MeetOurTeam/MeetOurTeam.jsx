import React from "react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sujeet Kumar",
    role: "Director",
    image: "d1.jpeg",
  },
  {
    id: 2,
    name: "Madhumita Panda",
    role: "Prosthetist",
    image: "d2.jpeg",
  },
  {
    id: 3,
    name: "Sanjana Kumari",
    role: "Prosthetist",
    image: "d3.jpeg",
  },
];

const Team = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-blue-900 font-bold mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our team of dedicated healthcare professionals brings together a
            diverse range of expertise, compassion, and commitment to patient
            care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member-card">
              <div className="relative overflow-hidden h-80">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-white text-xl font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-pink-200">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
