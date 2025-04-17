import React from "react";
import { Check } from "lucide-react";

const About = () => {
  return (
    <section className="py-10 w-[90%] m-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-16 mb-10 lg:mb-0">
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-64 h-64 rounded-full bg-[#b7d6e5] z-0"></div>
              <img
                src="choose.jpeg"
                alt="Team of Female Lawyers"
                className="rounded-lg shadow-2xl w-full z-10 relative"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-blue-900">
              Why Choose us?
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              At AMARHUMANOID, your health is our highest priority. We are
              committed to providing compassionate, cutting-edge care in a
              healing environment. Here’s why patients choose us:
            </p>

            <div className="mb-8">
              <div className="flex items-start mb-4">
                <Check className="text-[#4e9bc4] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">Expert Medical Team:</span>{" "}
                  Our hospital is home to highly qualified doctors, nurses, and
                  specialists who bring years of experience and dedication to
                  every patient’s care.
                </p>
              </div>
              <div className="flex items-start mb-4">
                <Check className="text-[#4e9bc4] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">Advanced Technology:</span> We
                  We invest in the latest medical technologies and diagnostic
                  tools to ensure accurate diagnoses and effective treatments.
                </p>
              </div>
              <div className="flex items-start mb-4">
                <Check className="text-[#4e9bc4] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">Comprehensive Services:</span>{" "}
                  From emergency care to specialized surgeries, rehabilitation,
                  and wellness programs — we offer a full spectrum of healthcare
                  under one roof.
                </p>
              </div>
              <div className="flex items-start">
                <Check className="text-[#4e9bc4] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">
                    Patient-Centered Approach:
                  </span>
                  We believe in personalized care. Our staff listens to your
                  concerns, respects your preferences, and involves you in every
                  decision about your health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
