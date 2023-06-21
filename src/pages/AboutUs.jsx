import React from "react";
import TopHeader from "../components/aboutUs/TopHeader";
import AwardCarousel from "../components/aboutUs/AwardCarousel";
import Award from "../components/aboutUs/Award";
import Coverage from "../components/aboutUs/Coverage";
import Address from "../components/aboutUs/Address";
import Profiles from "../components/aboutUs/Profiles";

const AboutUs = () => {
  return (
    <div className=" bg-white w-screen overflow-hidden pr-3">
      <TopHeader />
      <Profiles />
      <Award />
      <Coverage />
      <Address />
    </div>
  );
};

export default AboutUs;
