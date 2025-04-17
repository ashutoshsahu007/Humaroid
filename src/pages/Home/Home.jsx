import React from "react";
import HeroImage from "./components/HeroImage/HeroImage";
import CenterOfExcellence from "./components/CenterOfExcellence/CenterOfExcellence";
import Offer from "./components/Offer/Offer";
import Executive from "./components/Executive/Executive";
import LifeStyle from "./components/LifeStyle/LifeStyle";
import Stats from "./components/Stats/Stats";
import Team from "../../components/MeetOurTeam/MeetOurTeam";
import Review from "./components/Review/Review";
import About from "../About/About";
import Testimonial from "../Testimonial/Testimonial";
import Products from "./components/Products/Products";

const Home = () => {
  return (
    <div>
      <HeroImage />
      <Products />
      <About />
      {/* <Executive /> */}
      {/* <Offer /> */}
      <Stats />
      <Team />
      <LifeStyle />
      <CenterOfExcellence />
      <Review />
      <Testimonial />
    </div>
  );
};

export default Home;
