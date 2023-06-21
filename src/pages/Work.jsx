import React, { useEffect, useState } from "react";
import { workTitle as title } from "../data/work";
import { workBody as data } from "../data/work";
import { BsGear, BsGrid, BsLaptop, BsPhone } from "react-icons/bs";
import { motion } from "framer-motion";

const Work = () => {
  const [active2, setActive] = useState(1);

  const filterData = data.filter((item) =>
    item.titleId.find((id) => id === active2)
  );

  return (
    <div className={`text-white`}>
      {/* Heading */}
      <motion.div
        initial={{ y: 100, opacity: "0%" }}
        animate={{ y: 0, opacity: "100%" }}
        transition={{ duration: 0.7 }}
        className="py-[4rem] md:py-[8rem] max-w-5xl mx-auto p-4"
      >
        <div className="text-4xl md:text-6xl font-bold leading-[3rem] md:leading-[5rem]">
          <h1 className="flex flex-col ">
            Here’s 5% of <span> our published work.</span>
          </h1>{" "}
          <span className="text-black">See 100% of our power.</span>
        </div>
        <div className="pt-[3rem] justify-between lg:items-end  hidden md:flex md:flex-col md:justify-start lg:flex-row md:items-start md:gap-5 lg:gap-0">
          <div className="grid grid-cols-3 gap-3 ">
            {title.map((item) => (
              <div
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`p-2 cursor-pointer flex items-center transition ease-in-out duration-200 ${
                  active2 === item.id && " font-extrabold"
                }`}
              >
                {active2 === item.id && (
                  <motion.span
                    animate={{
                      width: "15px",
                      height: "2px",
                      backgroundColor: "black",
                      marginRight: "10px",
                    }}
                    transition={{ duration: 0.3 }}
                  ></motion.span>
                )}
                <h1
                  className={`w-[16rem] tracking-wider ${
                    active2 === item.id && "w-[13rem]"
                  }`}
                >
                  {item.name}
                </h1>
              </div>
            ))}
          </div>
          <div>
            <h1 className="uppercase text-xs mb-4 font-bold">Legend</h1>
            <div className="grid grid-cols-2 text-xs border-l border-white">
              {/* Phone Icon */}
              <div className="flex items-center gap-2 px-4 py-2">
                <BsPhone />
                <h1>App</h1>
              </div>
              {/* Web Icon */}
              <div className="flex items-center gap-2 px-4 py-2">
                <BsLaptop />
                <h1>Web</h1>
              </div>
              {/* CMS Icon */}
              <div className="flex items-center gap-2 px-4 py-2">
                <BsGear />
                <h1>CMS</h1>
              </div>
              {/* UI/UX Icon */}
              <div className="flex items-center gap-2 px-4 py-2">
                <BsGrid />
                <h1>UI/UX</h1>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 animation_one">
        {filterData.map((item) => (
          <motion.div
            initial={{ y: -10, x: 10, opacity: "0%" }}
            animate={{ y: 0, x: 0, opacity: "100%" }}
            transition={{ duration: 1 }}
            key={item.id}
            className={`relative w-full h-[17.5rem] lg:h-[30rem]   ${
              item.img.sizeLg && "lg:col-span-2"
            }`}
          >
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black hover:opacity-40 z-10 transition ease-in-out duration-500 cursor-pointer"></div>

            <img
              src={item.img.src}
              className="w-full h-full hover:overflow-hidden object-cover transition ease-in-out duration-500 "
              alt=""
            />

            {/* <div className="w-full h-full absolute top-0 left-0 p-6 flex flex-col z-20 "> */}
            <div className="z-20 absolute top-10 left-10 w-fit  flex flex-col flex-1">
              <div className="flex -ml-1 gap-1 text-sm  ">
                {item.titleId.map((item) =>
                  title.map(
                    (title) =>
                      title.id === item && (
                        <div>
                          {title.id === 1 ? <></> : <h1>{title.name},</h1>}
                        </div>
                      )
                  )
                )}
              </div>
              <p className="py-1 font-bold text-lg ">{item.name}</p>
            </div>

            <div className="z-20 absolute bottom-10 left-10 w-fit flex gap-2 py-2 ">
              {item.icon.app && (
                <div className="bg-white text-black p-2 rounded-full">
                  <BsPhone />
                </div>
              )}
              {item.icon.web && (
                <div className="bg-white text-black p-2 rounded-full">
                  <BsLaptop />
                </div>
              )}
              {item.icon.cms && (
                <div className="bg-white text-black p-2 rounded-full">
                  <BsGear />
                </div>
              )}
              {item.icon.uiux && (
                <div className="bg-white text-black p-2 rounded-full">
                  <BsGrid />
                </div>
              )}
            </div>
            {/* </div> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
