import React from "react";
import { Heart, Award, Clock, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-blue-900 text-center">
            About HUMANOID Rehab Clinic
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            With a legacy of excellence spanning over decades, the Orthotics &
            Prosthetics Centre is committed to providing comprehensive
            healthcare services with a human touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-gray-600">
              Humanoid Rehab Clinic is dedicated to transforming lives through
              advanced prosthetics, orthotics, and rehabilitation services. We
              believe recovery is not just about mobility—it's about restoring
              confidence, independence, and quality of life. Our expert team
              combines clinical innovation with compassionate care, supporting
              patients at every stage of their journey.
            </p>
            <p className="text-gray-600">
              We also partner with hospitals and clinics to extend our impact
              and deliver seamless, personalized solutions. Whether you're
              adapting to a new prosthetic, in need of spinal support, or
              beginning physiotherapy, we’re here to guide you with tailored
              care and cutting-edge technology. At Humanoid Rehab Clinic, your
              recovery is our mission, and every step forward is a step toward
              living fully again.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex flex-col items-center p-4 bg-[#E8F4FC] rounded-lg">
                <span className="text-3xl font-bold text-[#233876]">50+</span>
                <span className="text-gray-600">Specialties</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#E8F4FC] rounded-lg">
                <span className="text-3xl font-bold text-[#233876]">300+</span>
                <span className="text-gray-600">Expert Doctors</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#E8F4FC] rounded-lg">
                <span className="text-3xl font-bold text-[#233876]">500+</span>
                <span className="text-gray-600">Beds</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#E8F4FC] rounded-lg">
                <span className="text-3xl font-bold text-[#233876]">40k+</span>
                <span className="text-gray-600">Patients Yearly</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#20b6aa]">
              <div className="flex items-start">
                <div className="bg-[#e8f4fc] p-3 rounded-full mr-4">
                  <Heart className="h-6 w-6 text-[#20b6aa]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1a4f8b]">
                    Patient-Centered Care
                  </h3>
                  <p className="text-gray-600 mt-2">
                    We prioritize your wellbeing with compassionate,
                    personalized care tailored to your unique needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#20b6aa]">
              <div className="flex items-start">
                <div className="bg-[#e8f4fc] p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-[#20b6aa]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1a4f8b]">
                    Medical Excellence
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Our internationally trained doctors and cutting-edge
                    technology ensure the highest standards of medical care.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#20b6aa]">
              <div className="flex items-start">
                <div className="bg-[#e8f4fc] p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-[#20b6aa]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1a4f8b]">
                    24/7 Emergency Services
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Our emergency department is fully equipped and staffed round
                    the clock to handle any medical emergency.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#20b6aa]">
              <div className="flex items-start">
                <div className="bg-[#e8f4fc] p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-[#20b6aa]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1a4f8b]">
                    Multidisciplinary Approach
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Our team of specialists work together to provide
                    comprehensive care for complex medical conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
