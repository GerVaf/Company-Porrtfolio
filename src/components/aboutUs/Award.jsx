import React, { useEffect, useState } from "react";
import AwardCarousel from "./AwardCarousel";

const awardCards = [
  {
    id: 1,
    h1: "The MOB-EX",
    h2: "Best of Show 2015",
    status: "Winner",
  },
  {
    id: 2,
    h1: "Mobile Marketing",
    h2: "Agency of the Year 2015",
    status: "Local Hero",
  },
  {
    id: 3,
    h1: "Mobile Agency",
    h2: "of the year 2014",
    status: "1st Place",
  },
  {
    id: 4,
    h1: "Mobile Marketing",
    h2: "Agency of the Year 2014",
    status: "Local Hero",
  },
];

const Award = () => {
  const [isShrink, setIsShrink] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setIsShrink(true);
      } else {
        setIsShrink(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className=" my-10 px-5">
      <h2 className=" text-3xl font-bold text-center mt-5 mb-10">
        Awards and Recognition
      </h2>
      <div className=" mb-10">
        {isShrink ? (
          <AwardCarousel awardCards={awardCards} />
        ) : (
          <div className=" mt-3 mb-10 flex justify-evenly">
            {awardCards.map((awardCard) => (
              <div
                className={`flex flex-col justify-center items-center `}
                key={awardCard.id}
              >
                <h2 className=" w-[240px] text-center text-xl">
                  {awardCard.h1}
                </h2>
                <h2 className=" w-[240px] text-center text-xl">
                  {awardCard.h2}
                </h2>
                <div className=" w-3 border border-slate-700 my-5"></div>
                <h2 className=" text-3xl font-bold text-[#d6ab76]">
                  {awardCard.status}
                </h2>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className=" flex flex-col min-[400px]:flex-row gap-5 min-[400px]:gap-0 mt-[5rem]  w-full">
        <div className=" min-[400px]:w-4/12 flex flex-col justify-center items-center">
          <img
            className=""
            src="https://www.codigo.co/_next/image?url=%2Fimages%2Ftrophies%2Fblue.png&w=3840&q=85"
            alt=""
          />
          <h3 className=" font-bold">Best of Show</h3>
        </div>
        <div className="min-[400px]:w-4/12 flex flex-col justify-center items-center">
          <img
            src="https://www.codigo.co/_next/image?url=%2Fimages%2Ftrophies%2Fgold.png&w=3840&q=85"
            alt=""
          />
          <h3>
            <span className=" font-bold">10</span> Gold
          </h3>
        </div>
        <div className="min-[400px]:w-4/12 flex flex-col justify-center items-center">
          <img
            src="https://www.codigo.co/_next/image?url=%2Fimages%2Ftrophies%2Fsilver.png&w=3840&q=85"
            alt=""
          />
          <h3>
            <span className=" font-bold">8</span> Silver
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Award;
