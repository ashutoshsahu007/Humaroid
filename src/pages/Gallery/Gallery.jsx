import React from "react";

const images = [
  "https://source.unsplash.com/featured/?hospital",
  "https://source.unsplash.com/featured/?clinic",
  "https://source.unsplash.com/featured/?doctor",
  "https://source.unsplash.com/featured/?surgery",
  "https://source.unsplash.com/featured/?healthcare",
  "https://source.unsplash.com/featured/?medical",
];

const HospitalGallery = () => {
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-blue-900 text-center">
        Our Hospital Gallery
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Hospital ${index + 1}`}
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalGallery;
