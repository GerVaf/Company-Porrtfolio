import React from "react";
import Feature from "../components/Home/Feature";
import Hero from "../components/Home/Hero";
import Logo from "../components/Home/Logo";
import Service from "../components/Home/Service";
import WorkFlow from "../components/Home/WorkFlow";


const Home = () => {
  

  return (
    <div className="bg-[rgb(213,51,62)] mb-10 text-white flex flex-col items-center ">
      <div className="w-[100%] flex flex-col gap-20">
        <Hero/>
        <Logo/>
        <Feature/>
        <Service/>
        <WorkFlow/>
      </div>
    </div>
  );
};

export default Home;
