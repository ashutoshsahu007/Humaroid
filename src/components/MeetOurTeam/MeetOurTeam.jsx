import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Managing Partner",
    image: "d1.jpeg",
    linkedin: "#",
    email: "priya@pinklegal.com",
  },
  {
    id: 2,
    name: "Aisha Khan",
    role: "Family Law Specialist",
    image: "d2.jpeg",
    linkedin: "#",
    email: "aisha@pinklegal.com",
  },
  {
    id: 3,
    name: "Lakshmi Nair",
    role: "Corporate Lawyer",
    image: "d3.jpeg",

    linkedin: "#",
    email: "lakshmi@pinklegal.com",
  },
  {
    id: 4,
    name: "Lakshmi Nair",
    role: "Corporate Lawyer",
    image: "d4.jpeg",

    linkedin: "#",
    email: "lakshmi@pinklegal.com",
  },
  {
    id: 5,
    name: "Lakshmi Nair",
    role: "Corporate Lawyer",
    image: "d5.jpeg",

    linkedin: "#",
    email: "lakshmi@pinklegal.com",
  },
  {
    id: 6,
    name: "Lakshmi Nair",
    role: "Corporate Lawyer",
    image: "d6.jpeg",

    linkedin: "#",
    email: "lakshmi@pinklegal.com",
  },
];

const Team = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-blue-900 font-serif font-bold mb-4">
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
                <div className="absolute inset-0 bg-[#4e9bc4] bg-opacity-0 flex items-center justify-center transition-all duration-300 opacity-0 hover:opacity-100 hover:bg-opacity-80">
                  <div className="flex space-x-4">
                    <a
                      href={member.linkedin}
                      className="bg-white p-3 rounded-full text-[#4e9bc4] hover:bg-gray-100"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="bg-white p-3 rounded-full text-[#4e9bc4] hover:bg-gray-100"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            asChild
            className="bg-[#233876] hover:bg-[#57798c] rounded-full p-2 text-white font-semibold px-8"
          >
            <Link to="/team">View All Team Members</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
