import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const AwardCarousel = ({ awardCards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === awardCards?.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="flex flex-col items-center mt-3 mb-10">
      <div className="relative h-60">
        <div className="flex justify-center relative h-[210px]">
          {awardCards?.map((awardCard, index) => (
            <AnimatePresence key={index}>
              {index === currentIndex && (
                <motion.div
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100vw" }}
                  transition={{
                    duration: 0.5,
                  }}
                  className={` absolute top-0 flex flex-col justify-center items-center p-5 lg:p-3 `}
                  key={awardCard.id}
                >
                  <h2 className=" w-[250px] text-center text-xl">
                    {awardCard.h1}
                  </h2>
                  <h2 className=" w-[250px] text-center text-xl">
                    {awardCard.h2}
                  </h2>
                  <div className=" w-3 border border-slate-700 my-5"></div>
                  <h2 className=" text-3xl font-bold text-[#d6ab76]">
                    {awardCard.status}
                  </h2>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
          {/* slider indicators */}
          <div className="absolute bottom-0  flex justify-center">
            {awardCards?.map((_, index) => (
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

export default AwardCarousel;
