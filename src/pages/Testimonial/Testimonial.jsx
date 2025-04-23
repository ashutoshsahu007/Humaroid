import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amit Singh ",
    role: "Patient",
    quote:
      "After losing my right leg in a car accident, I was determined to walk again. Getting fitted for my prosthetic felt like hitting the lottery. The service was fast, accurate, and supportive. I walked immediately without therapy—thanks to my determination and the amazing team behind me. I couldn’t ask for better care, love, and passion than they gave me.",
    rating: 5,
  },
  {
    id: 2,
    name: "Annu Panday",
    role: "Patient",
    quote:
      "Losing my leg was devastating. While recovering, Joe Smith from Amar Humanoid visited and helped me become the first amputee at Mount Vernon Hospital to walk out with a prosthetic. His support has been incredible. Joe and his team are caring, professional, and truly the best. If you ever lose a limb, choose Amar Humanoid—they’ll be with you every step.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rohit Prasad",
    role: "Patient",
    quote:
      "My neurosurgeon prescribed a soft Thomas Cervical Collar and referred me to Infinite Amar Humanoid Rehab Clinic. Booking the appointment was easy, thanks to a professional and friendly receptionist. During my visit, the practitioner was patient, compassionate, and highly knowledgeable. The entire experience was informative, smooth, and stress-free. I truly appreciate the care and expertise provided by the Amar Humanoid team.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <section className="py-10 md:px-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl  font-bold mb-4 text-blue-900">
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
              <p className="text-gray-700 mb-6 text-justify">
                "{testimonial.quote}"
              </p>
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
