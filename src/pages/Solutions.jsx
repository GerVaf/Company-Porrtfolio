import React, { useEffect, useState } from "react";
import { imagesId, imageSlide } from "../constant";
import CardSlide from "../components/solutions/CardSlide";
import CardId from "../components/solutions/CardId";
import { motion } from "framer-motion";
const Solution = () => {
  const [isMouseOver, setIsMosueOver] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const [current, setCurrent] = useState(imagesId);
  const handleMouseEnter = (id) => {
    const updateArr = imagesId.find((item) => item?.id === id);
    setIsMosueOver(true);
    setIsHovered(true);
    setCurrent(updateArr);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsMosueOver(false);

  };

  return (
    <div className=" bg-white ">
      {/* solutions headers */}
      <div className="sm:max-w-[800px] sm:pt-32 pt-20 tracking-wider  sm:leading-4 leading-16 sm:px-20 px-5">
        <h1 className=" sm:text-6xl text-4xl font-bold">
          Ready-made solutions.
          <br />
          <span className="text-[#D5333E]">
            Customisable for your business.
          </span>
        </h1>
      </div>

      {/* image */}
      <div className=" flex flex-wrap pt-12  "
      
      >
        
        {/* <div
          className="w-3/12 flex relative "
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        > */}
          {!isMouseOver ? (
            imageSlide?.map((item) => (
             <>
              <CardSlide key={item?.id}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                item={item} isHovered={isHovered} setIsHovered={setIsHovered} className="relative"
              />
             </>
              
            ))
          ) : (
            <CardId key={imagesId?.id} handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} item={current} className="relative"/>
          )}
          <div className="sm:absolute hidden font-semibold text-white top-[20%] left-[20%] z-10">{imagesId?.map((item) =>item?.desc)}</div>
            
         
        {/* </div> */}
      </div>

      {/* complete */}
      <div className=" sm:w-7/12 sm:mt-24 sm:px-20 px-5 py-8">
        <h2 className=" sm:text-[30px] text-[22px] sm:font-light font-thin">
          Complete end-to-end solutions for any digital touchpoints - mobile
          apps, responsive web portals, touchscreen kiosks and more.
        </h2>
        <p className="py-5 tracking-wider">
          Recruit service providers, book services anytime anywhere plus receive
          real-time status updates of what’s going on. Monitor and observe all
          activities via a fully customisable dashboard and leverage data
          collected to provide more value to your business and customers.
        </p>
        <p className=" py-3 tracking-wider">
          There are much more details to all the above we’ve built,{" "}
          <span className=" text-[#D5333E] font-bold"> speak to us today</span>{" "}
          to see how we can share the solutions with you.
        </p>
      </div>
    </div>
  );
};

export default Solution;