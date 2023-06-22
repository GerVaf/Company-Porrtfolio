import React, { useState } from "react";
import { motion } from "framer-motion";
const CardSlide = ({ item, id, handleMouseEnter, handleMouseLeave }) => {
  const initialPosition = { x: -200 };
  const targetPosition = { x: 0 };
  return (
    <div className="sm:w-3/12 w-6/12 relative " onMouseLeave={handleMouseLeave} onMouseEnter={() => handleMouseEnter(item?.id)} initial={initialPosition} 
   
   > 

      <motion.img  animate={targetPosition}
    transition={{ duration: 1.1,delay:1,ease:"easeInOut" }}
       
        // key={item?.id}
        src={item?.image}
        alt={`Images${id}`} 
        
      />
      {/* <div className={isHovered && "textOver"}></div> */}
     <div className={`text-white sm:text-xl sm:font-semibold absolute  bottom-[10%]  left-10 z-30 `}
       >
      {item?.name}
     </div>

    </div>
  );
};

export default CardSlide;
