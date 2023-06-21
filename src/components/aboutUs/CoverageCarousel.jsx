import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const CoverageCarousel = ({ coverageCards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === coverageCards?.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="flex flex-col items-center mt-3 mb-10">
      <div className="relative min-h-[13.5rem] w-full">
        <div className=" h-full">
          {coverageCards?.map((coverageCard, index) => (
            <AnimatePresence key={index}>
              {currentIndex === index && (
                <motion.div
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100vw" }}
                  transition={{
                    duration: 0.5,
                  }}
                  key={coverageCard.id}
                  className=" absolute w-full h-full top-0 bg-white p-7 pb-10 group hover:my-shadow transition-shadow duration-1000 shadow-small rounded-md flex flex-col justify-center items-center"
                >
                  <h2 className=" font-bold mb-5 text-red-500 text-xl">
                    {coverageCard.header}
                  </h2>
                  <p className=" tracking-wide font-[400] sm:text-lg">
                    {coverageCard.paragraph}
                  </p>
                  <div className=" group-hover:translate-x-5 transition duration-1000 absolute bottom-3 right-7">
                    <HiArrowNarrowRight className=" text-lg text-red-500" />
                  </div>
                </motion.div>
              )}
              {/* <div className="absolute bottom-0  flex justify-center">
                {coverageCards?.map((_, index) => (
                  <button
                    key={index}
                    className={`h-3 w-3 mx-1 sm:mx-2 rounded-full transition duration-300 ${
                      index === currentIndex ? "bg-red-500" : "bg-gray-400"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div> */}
            </AnimatePresence>
          ))}
          {/* slider indicators */}
          <div className="absolute -bottom-8 mx-auto left-0 right-0 w-32 flex justify-center">
            {coverageCards?.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 mx-1 sm:mx-2 rounded-full transition duration-300 ${
                  index === currentIndex ? "bg-red-500" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverageCarousel;
