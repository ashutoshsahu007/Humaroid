import React from "react";
import { Carousel } from "flowbite-react";

const HeroImage = () => {
  return (
    <div className="h-[44vw] scrollbar-none">
      <Carousel>
        <img src="hero/hero1.png" alt="..." />
        <img src="hero/img1.jpg" alt="..." />
        <img src="hero/img3.jpg" alt="..." />
      </Carousel>
    </div>
  );
};

export default HeroImage;
