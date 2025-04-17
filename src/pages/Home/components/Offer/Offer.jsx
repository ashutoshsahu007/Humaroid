import React from "react";

const Offer = () => {
  return (
    <div className="w-[95%] m-auto flex flex-col items-center  gap-4 my-15">
      <h1 className="font-bold text-4xl text-blue-900 font-serif text-center">
        WHAT WE OFFER
      </h1>
      <div className="flex gap-3 justify-center flex-wrap">
        <div className="w-[300px] sm:w-[290px] p-3 flex flex-col gap-4  shadow-[0px_0px_10px_1px_rgba(0,0,0,0.1)] rounded-lg transition-transform duration-[300ms] ease-in-out hover:rotate-3">
          <img src="Offer/or.jpg" className="w-[290px] sm:w-fit" />
          <h1 className="text-[#1176ba] text-xl font-bold">Prosthetics</h1>
          <p className="text-sm text-[#8e8d8d] leading-[26px]">
            Prosthesis is an artificial device that replaces a missing body
            part, which may be lost through trauma, disease, or congenital
            conditions. Prosthetics divide into two categories - Upper extremity
            prosthetics & Lower extremity prosthetics.
          </p>
          <button className="text-white bg-[#1176ba] w-fit px-6 py-1 rounded-lg text-md font-semibold">
            Read More
          </button>
        </div>
        <div className="w-[300px] sm:w-[290px]  p-3 flex flex-col gap-4  shadow-[0px_0px_10px_1px_rgba(0,0,0,0.1)] rounded-lg transition-transform duration-[300ms] ease-in-out hover:rotate-3">
          <img src="Offer/ph.jpg" />
          <h1 className="text-[#1176ba] text-xl font-bold">
            Physiotherapy / Occupational
          </h1>
          <p className="text-sm text-[#8e8d8d] leading-[26px]">
            Physiotherapy (often abbreviated to PT) is a physical medicine and
            rehabilitation specialty that remediates impairments and promotes
            mobility, function, and quality of life through examination,
            diagnosis, prognosis, and physical intervention
          </p>
          <button className="text-white bg-[#1176ba] w-fit px-6 py-1 rounded-lg text-md font-semibold">
            Read More
          </button>
        </div>
        <div className="w-[300px] sm:w-[290px]  p-3 flex flex-col gap-4  shadow-[0px_0px_10px_1px_rgba(0,0,0,0.1)] rounded-lg transition-transform duration-[300ms] ease-in-out hover:rotate-3">
          <img src="Offer/pr.jpg" />
          <h1 className="text-[#1176ba] text-xl font-bold">Orthotics</h1>
          <p className="text-sm text-[#8e8d8d] leading-[26px]">
            Orthotics is the application of external devices to a part of the
            body to either maintain or alter the position of a joint or body
            part. They are most commonly used to reduce pain and discomfort,
            improve mobility and function, and to reduce risk of further
            injury..
          </p>
          <button className="text-white bg-[#1176ba] w-fit px-6 py-1 rounded-lg text-md font-semibold">
            Read More
          </button>
        </div>
        <div className="w-[300px] sm:w-[290px]  p-3 flex flex-col gap-4  shadow-[0px_0px_10px_1px_rgba(0,0,0,0.1)] rounded-lg transition-transform duration-[300ms] ease-in-out hover:rotate-3">
          <img src="Offer/re.png" />
          <h1 className="text-[#1176ba] text-xl font-bold">
            Rehabilitation products
          </h1>
          <p className="text-sm text-[#8e8d8d] leading-[26px]">
            With our comprehensive selection of rehabilitation equipment and
            therapy tools, Orthoshed is your one-stop shopping source for
            Physical Therapy, Occupational Therapy, and Speech Therapy products.
          </p>
          <button className="text-white bg-[#1176ba] w-fit px-6 py-1 rounded-lg text-md font-semibold">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
