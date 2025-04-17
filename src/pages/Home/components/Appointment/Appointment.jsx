import React from "react";

const Appointment = () => {
  return (
    <div className="bg-[#4e9bc4] text-white py-10 flex flex-row justify-between px-15 gap-30">
      <h1 className="text-3xl font-bold">Book your Appointment Online</h1>
      <button className="border-2 px-10 hover:cursor-pointer rounded-lg text-base py-2">
        Book Now
      </button>
    </div>
  );
};

export default Appointment;
