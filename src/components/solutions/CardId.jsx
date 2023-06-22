import React, { useState } from "react";
import { imagesId } from "../../constant";
import { motion } from "framer-motion";
const CardId = ({ item, handleMouseLeave ,handleMouseEnter}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex  sm:w-3/12 w-6/12 relative"   onMouseLeave={handleMouseLeave}>
      {item?.image?.map((img, index) => (
        <img src={img} key={index} className="-z-1"  
       />
      ))}
      

     
       {/* <div className="absolute top-[20%]">{imagesId?.desc} </div> */}
     
    </div>
  );
};

export default CardId;
