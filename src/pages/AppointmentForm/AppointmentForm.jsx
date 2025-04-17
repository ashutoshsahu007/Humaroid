import React, { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Send to backend or show confirmation here
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 shadow-lg rounded-2xl bg-white">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-blue-900 text-center">
        Request an Appointment
      </h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div>
          <label className="block mb-1 font-medium text-[#374151]">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full border rounded p-2 text-[#64748b]"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-[#374151]">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded p-2 text-[#64748b]"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-[#374151]">Phone</label>
          <input
            type="tel"
            name="phone"
            className="w-full border rounded p-2 text-[#64748b]"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-[#374151]">
            Department
          </label>
          <input
            type="text"
            name="department"
            className="w-full border rounded p-2 text-[#64748b]"
            placeholder="Cardiology, Neurology..."
            value={formData.department}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-[#374151]">
            Preferred Doctor
          </label>
          <input
            type="text"
            name="doctor"
            className="w-full border rounded p-2 text-[#64748b]"
            placeholder="Dr. Smith"
            value={formData.doctor}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-[#374151]">
            Preferred Date
          </label>
          <input
            type="date"
            name="date"
            className="w-full border rounded p-2 text-[#64748b]"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-[#374151]">
            Additional Notes
          </label>
          <textarea
            name="notes"
            className="w-full border rounded p-2 text-[#64748b]"
            placeholder="Any specific concern or message..."
            value={formData.notes}
            onChange={handleChange}
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#36bdb2] text-white py-2 px-4 rounded cursor-pointer"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
