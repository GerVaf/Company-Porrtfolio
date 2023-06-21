import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Address = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [canHover, setCanHover] = useState(true);
  const [hoverCardNum, setHoverCardNum] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setCanHover(window.innerWidth >= 1024);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleHover = (i) => {
    canHover && setIsHovered(true);
    setHoverCardNum(i);
  };

  const handleHoverEnd = () => {
    canHover && setIsHovered(false);
    setHoverCardNum(0);
  };
  return (
    <div className=" w-full h-[800px] md:h-[600px] lg:h-[100vh] bg-[#3c2837] text-white mb-[5rem]">
      <div className=" p-[1.2rem] h-full flex flex-col md:flex-row md:gap-5 lg:p-[5rem] lg:gap-20">
        {/* address left  */}
        <div className=" relative mb-[30px] md:w-[15rem] md:flex md:flex-col md:justify-between md:h-full">
          <h1 className=" text-xl text-center md:text-start mt-5 mb-[40px]">
            Find us
          </h1>
          <div className=" flex justify-between md:gap-6 md:content-end md:flex-col ">
            <div className=" flex flex-col gap-2">
              <h2 className=" text-lg">Say Hello</h2>
              <p className="hvr-underline-from-center w-fit text-sm">
                +65 6455 9790
              </p>
              <p className="hvr-underline-from-center w-fit text-sm">
                hello@codigo.co
              </p>
            </div>
            <div className=" flex flex-col gap-2">
              <h2 className=" text-lg">Join Codigo</h2>
              <p className="hvr-underline-from-center w-fit text-sm">
                careers@codigo.co
              </p>
            </div>
            <div className=" hidden md:flex flex-col gap-2">
              <h2 className=" text-lg">Build Something</h2>
              <p className=" text-sm">Request a quotation</p>
            </div>
          </div>
          <div className=" hidden md:block hover:translate-x-5 transition duration-1000 absolute bottom-0 md:right-[10%] lg:right-[15%]">
            <HiArrowNarrowRight className=" text-lg text-red-500" />
          </div>
        </div>
        {/* address right  */}
        <div className=" w-full h-full flex flex-col lg:flex-row lg:gap-0 gap-5 justify-between">
          <div
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={handleHoverEnd}
            className=" group relative h-[160px] lg:h-full  w-full overflow-hidden"
          >
            <img
              className=" min-[1024px]:group-hover:scale-[1.15] transition duration-1000 object-cover object-center w-full h-full"
              src="https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2Fwb3JlfGVufDB8fDB8fHww&w=1000&q=80"
              alt=""
            />
            <div
              className={` ${
                canHover && "group-hover:bg-opacity-30"
              } transition duration-1000 absolute z-40 top-0 w-full h-full bg-black bg-opacity-0`}
            ></div>
            <div className=" absolute top-0 w-full h-full p-5 flex flex-col justify-center lg:justify-end">
              {(!isHovered || hoverCardNum != 1) && (
                <AnimatePresence>
                  <motion.h2
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5 }}
                    className=" text-lg lg:absolute  bottom-5 font-bold mb-5 lg:mb-0 lg:text-[1.5rem]"
                  >
                    Singapore
                  </motion.h2>
                </AnimatePresence>
              )}
              <p className="w-full min-[480px]:w-6/12  lg:hidden text-[15px] md:text-[17px]">
                24 Sin Ming Lane, Midview City #04-91 Singapore 573970
              </p>
              {isHovered && canHover && hoverCardNum == 1 && (
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8 }}
                  className=" z-50 "
                >
                  <h2 className=" text-lg font-bold mb-5 lg:mb-0 lg:text-[1.5rem]">
                    Singapore
                  </h2>
                  <p className=" w-6/12 lg:w-full">
                    24 Sin Ming Lane, Midview City #04-91 Singapore 573970
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          <div
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={handleHoverEnd}
            className=" group relative h-[160px] lg:h-full  w-full overflow-hidden"
          >
            <img
              className=" min-[1024px]:group-hover:scale-[1.15] transition duration-1000 object-cover object-center w-full h-full"
              src="https://cdn.britannica.com/40/194240-050-C1ED1F29/Buddhist-temples-Pagan-Myanmar.jpg"
              alt=""
            />
            <div
              className={` ${
                canHover && "group-hover:bg-opacity-30"
              } transition duration-1000 absolute z-40 top-0 w-full h-full bg-black bg-opacity-0`}
            ></div>
            <div className=" absolute top-0 w-full h-full p-5 flex flex-col justify-center lg:justify-end">
              {(!isHovered || hoverCardNum != 2) && (
                <AnimatePresence>
                  <motion.h2
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5 }}
                    className=" lg:absolute  bottom-5 font-bold mb-5 lg:mb-0 lg:text-[1.5rem]"
                  >
                    Myanmar
                  </motion.h2>
                </AnimatePresence>
              )}
              <p className=" w-full min-[480px]:w-6/12 text-[15px] md:text-[17px] lg:hidden">
                No. 11A, 2nd Floor (New Strength Building), East Horse Race
                Course Road, Tamwe, Yangon, Myanmar
              </p>
              {isHovered && hoverCardNum == 2 && (
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8 }}
                  className=" z-50"
                >
                  <h2 className=" font-bold mb-5 lg:mb-0 lg:text-[1.5rem]">
                    Myanmar
                  </h2>
                  <p className=" w-6/12 lg:w-full">
                    No. 11A, 2nd Floor (New Strength Building), East Horse Race
                    Course Road, Tamwe, Yangon, Myanmar
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          <div
            onMouseEnter={() => handleHover(3)}
            onMouseLeave={handleHoverEnd}
            className="group relative h-[160px] lg:h-full w-full overflow-hidden"
          >
            <img
              className=" min-[1024px]:group-hover:scale-[1.15] transition duration-1000 object-cover object-center w-full h-full"
              src="https://i.natgeofe.com/k/d2701667-c426-4a1b-8d75-d01bdc387fdc/vietnam-ha-long-bay_16x9.jpg?w=1200"
              alt=""
            />
            <div
              className={` ${
                canHover && "group-hover:bg-opacity-30"
              } transition duration-1000 absolute z-40 top-0 w-full h-full bg-black bg-opacity-0`}
            ></div>
            <div className=" absolute top-0 w-full h-full p-5 flex flex-col justify-center lg:justify-end">
              {(!isHovered || hoverCardNum != 3) && (
                <AnimatePresence>
                  <motion.h2
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5 }}
                    className=" lg:absolute z-50 bottom-5 font-bold mb-5 lg:mb-0 lg:text-[1.5rem]"
                  >
                    Vietnam
                  </motion.h2>
                </AnimatePresence>
              )}
              <p className=" w-full min-[480px]:w-6/12 text-[15px] md:text-[17px] lg:hidden">
                76 Nguyen Duc Canh Street Ninh Kieu District, Can Tho City
              </p>
              {isHovered && hoverCardNum == 3 && (
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8 }}
                  className=" z-50"
                >
                  <h2 className=" font-bold mb-5 lg:mb-0 lg:text-[1.5rem]">
                    Vietnam
                  </h2>
                  <p className=" w-6/12 lg:w-full">
                    76 Nguyen Duc Canh Street Ninh Kieu District, Can Tho City
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
