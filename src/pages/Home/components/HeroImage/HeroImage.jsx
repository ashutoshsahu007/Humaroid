import React from "react";
import { Carousel } from "flowbite-react";

const HeroImage = () => {
  return (
    <div className="h-[44vw] scrollbar-none">
      <Carousel>
        <img src="hero/1.avif" alt="..." />
        <img src="hero/2.avif" alt="..." />
        <img src="hero/3.avif" alt="..." />
      </Carousel>
    </div>
  );
};

export default HeroImage;
