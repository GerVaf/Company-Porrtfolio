import React from "react";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "../../../node_modules/framer-motion";

const Hero = () => {
  // for text animation
  const textGroups = [
    "Not client-vendor or vendor-client, we collaborate for the win.",
    "Between your business objectives and what your customers want.",
    "Design and development for brands and start-ups.",
  ];

  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroupIndex((prevIndex) =>
        prevIndex === textGroups.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Delay between iterations in milliseconds

    return () => clearInterval(interval);
  }, [textGroups.length]);
  return (
    <div className="flex justify-around">
      {/* left side  */}
      <div className=" w-4/12 h-[90vh] text-[180px] font-bold">
        <span>We</span>
        <Typewriter
          options={{
            strings: [`Create Bridges.`, `Build Digital.`, `Make Sense.`],
            autoStart: true,
            loop: true,
            cursor: "",
            delay: 300,
          }}
        />
      </div>

      {/* right side  */}
      <div className=" w-4/12 h-[90vh] flex gap-5 items-end">
        <div className="flex items-start gap-10">
          <div className="h-[250px] w-2 border-opacity-30 border border-slate-200 relative overflow-hidden">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 250 }}
              className="bg-white h-[200px] w-[100%]"
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            ></motion.div>
          </div>
          <div className=" text-2xl font-bold ">
            {textGroups.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={
                  index === currentGroupIndex
                    ? { opacity: 1 }
                    : { opacity: 0, y: "-20px" }
                }
                exit={{ opacity: 0, y: "-20px" }}
                transition={{ duration: 0.2 }}
              >
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
