import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amit Singh ",
    role: "Patient",
    quote:
      "I was in a car accident that made me more determined to walk after losing my right leg below the knee. I got fitted for my leg and when it was done, it was like hitting the lottery. My service was fast, great and accurate. When I first put my leg on I started walking right away without therapy because I had determination and a great team that stood behind me. I couldn't ask for a better team then the one I have with A1 service, love and passion",
    rating: 5,
  },
  {
    id: 2,
    name: "Annu Panday",
    role: "Patient",
    quote:
      "Losing my leg was the worst day of my life. While lying in my hospital bed recovering from my surgery and wondering if I'd ever be able to live a normal life again, I was visited by Joe Smith of Amar Humanoid to talk about a prosthetic leg. With Joe's help, I was the first amputee at Mount Vernon Hospital to walk out with a prosthetic leg, instead of the usual course of treatment which calls for getting a leg months later. Joe has been by my side ever since, every step of the way. His help and encouragement have been invaluable. He and his staff are #1 in every way and a pleasure to work with. If you are ever in the unfortunate situation where you lose a limb, I hope you will choose Amar Humanoid to help you through the process.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rohit Prasad",
    role: "Patient",
    quote:
      "My neurosurgeon prescribed a soft Thomas Cervical Collar. His office directed me to go to Infinite Amar Humanoid Rehab Clinic. Making the appointment was so easy, thanks to a very professional, flexible, and pleasant receptionist. On the day of the appointment, I met with my assigned practitioner, who was very patient, compassionate, thorough, and knowledgeable about my condition as well as her field. My visit to Amar Humanoid Rehab Clinic was very informative and stress free.",
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
