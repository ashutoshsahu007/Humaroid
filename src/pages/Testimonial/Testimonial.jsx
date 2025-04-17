import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Anjali Mehta",
    role: "Patient",
    quote:
      "I came to [Hospital Name] during an emergency, and I can’t thank the staff enough for how quickly and compassionately they treated me. The doctors were amazing, and the nurses were with me every step of the way.",
    rating: 5,
  },
  {
    id: 2,
    name: "Shweta Reddy",
    role: "Patient",
    quote:
      "I’ve never felt more cared for in a medical setting. The team listened to my concerns, explained everything clearly, and made me feel like more than just a patient.",
    rating: 5,
  },
  {
    id: 3,
    name: "Farah Hussain",
    role: "Patient",
    quote:
      "The hospital is spotless, the staff is polite, and everything is so well organized. I was nervous going in for surgery, but the team made me feel calm and confident.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <section className="py-10 md:px-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-blue-900">
            Patient Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            See what our patient have to say about their experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <h4 className="font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
