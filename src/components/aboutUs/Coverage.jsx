import { HiArrowNarrowRight } from "react-icons/hi";
import CoverageCarousel from "./CoverageCarousel";
import { useEffect, useState } from "react";

const coverageCards = [
  {
    id: 1,
    header: "IMDA.GOV",
    paragraph:
      "Why and how Codigo's founder raised the mobile app industry standards",
  },
  {
    id: 2,
    header: "Marketing Interactive",
    paragraph:
      "Codigo named overall champions at Mob-Ex with 3 Gold, 1 Silver and 2 Bronze!",
  },
  {
    id: 3,
    header: "TNP",
    paragraph:
      "Learn more about Codigo's first delivery startup and its modus operandi!",
  },
  {
    id: 4,
    header: "Vulcan Post",
    paragraph:
      "Check out Codigo founder's feature with the top minds in the mobile app industry!",
  },
  {
    id: 5,
    header: "Vulcan Post",
    paragraph:
      "Here's the team who designed and developed ComfortDelGro's sexy new mobile app!",
  },
];

const Coverage = () => {
  const [isShrink, setIsShrink] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 770) {
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
    <div className=" bg-slate-50 w-full px-4 pb-[5rem]">
      <h1 className=" font-bold text-4xl text-center py-[5rem]">
        Press Coverage
      </h1>
      {isShrink ? (
        <CoverageCarousel coverageCards={coverageCards} />
      ) : (
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-5">
          {coverageCards.map((coverageCard) => (
            <div
              key={coverageCard.id}
              className=" group hover:my-shadow transition duration-1000 shadow-small relative p-7 bg-white rounded-md flex flex-col justify-center items-center"
            >
              <h2 className=" font-bold mb-5 text-red-500 text-xl">
                {coverageCard.header}
              </h2>
              <p className=" tracking-wide font-[400] text-lg">
                {coverageCard.paragraph}
              </p>
              <div className=" group-hover:translate-x-5 transition duration-1000 absolute bottom-3 right-7">
                <HiArrowNarrowRight className=" text-lg text-red-500" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Coverage;
