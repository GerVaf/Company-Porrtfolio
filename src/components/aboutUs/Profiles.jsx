import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const profileCards = [
  {
    id: 1,
    color: "blue-200",
    photo: "/tzm.jpg",
    name: "Thant Zin Min",
    path: "/profiles/image.webp",
  },
  { id: 2, color: "blue-400", photo: "/mw.jpg", name: "Min Wei",path: "/profiles/image (1).webp", },
  { id: 3, color: "blue-600", photo: "/wy.jpg", name: "Wai Yan",path: "/profiles/image (2).webp", },
  { id: 4, color: "blue-800", photo: "/whz.jpg", name: "Win Htet Zaw",path: "/profiles/image (3).webp", },

  { id: 5, color: "cyan-200",path: "/profiles/image (4).webp", },
  { id: 6, color: "cyan-400",path: "/profiles/image (5).webp", },
  { id: 7, color: "cyan-600" ,path: "/profiles/image (6).webp",},
  { id: 8, color: "cyan-800" },

  { id: 9, color: "lime-200" },
  { id: 10, color: "lime-400" },
  { id: 11, color: "lime-600" },
  { id: 12, color: "lime-800" },

  { id: 13, color: "orange-200" },
  { id: 14, color: "orange-400" },
  { id: 15, color: "orange-600" },
  { id: 16, color: "orange-800" },

  { id: 17, color: "amber-200" },
  { id: 18, color: "amber-400" },
  { id: 19, color: "amber-600" },
  { id: 20, color: "amber-800" },

  { id: 21, color: "teal-200" },
  { id: 22, color: "teal-400" },
  { id: 23, color: "teal-600" },
  { id: 24, color: "teal-800" },

  { id: 25, color: "emerald-200" },
  { id: 26, color: "emerald-400" },
  { id: 27, color: "emerald-600" },
  { id: 28, color: "emerald-800" },

  { id: 29, color: "teal-200" },
  { id: 30, color: "teal-400" },
  { id: 31, color: "teal-600" },
  { id: 32, color: "teal-800" },

  { id: 33, color: "sky-200" },
  { id: 34, color: "sky-400" },
  { id: 35, color: "sky-600" },
  { id: 36, color: "sky-800" },

  { id: 37, color: "violet-200" },
  { id: 38, color: "violet-400" },
  { id: 39, color: "violet-600" },
  { id: 40, color: "violet-800" },

  { id: 41, color: "indigo-200" },
  { id: 42, color: "indigo-400" },
  { id: 43, color: "indigo-600" },
  { id: 44, color: "indigo-800" },
];

const Profiles = () => {
  const [cards, setCards] = useState([]);
  const [isSeeMore, setIsSeeMore] = useState(true);
  const count = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        count.current = 8;
      } else if (window.innerWidth < 1024) {
        count.current = 13;
      } else {
        count.current = 19;
      }

      if (count.current >= profileCards.length) {
        setIsSeeMore(false);
      } else {
        setIsSeeMore(true);
      }
      const removedCard = profileCards.slice(0, count.current);
      setCards(removedCard);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);
  console.log(count);

  console.log(cards);

  const handleSeeMore = () => {
    setIsSeeMore(false);
    setCards((prevCards) => {
      console.log(prevCards);

      const nextCard = profileCards.slice(count.current);
      console.log(nextCard);
      return [...prevCards, ...nextCard];
    });
  };

  const handleSeeLess = () => {
    setIsSeeMore(true);
    setCards((prevCards) => {
      const nextCard = prevCards.slice(0, count.current);
      return [...nextCard];
    });
  };

  const profileVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };

  const containerVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className=" grid text--950 grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 grid-flow-row text-"
      >
        {cards.map((card, index) => (
          <motion.div
            variants={profileVariants}
            key={index}
            className={`group relative w-full aspect-square bg-${card.color} border border-[#3c2837]`}
          >
            <img
              src={card.photo ? `${card.photo}` : "/syg.jpg"}
              className=" w-full h-full object-cover origin-center"
              alt={card.name && card.name}
            />
            <div className=" absolute overflow-hidden p-5 lg:p-3  opacity-0 group-hover:opacity-100  w-full h-full bg-red-500 origin-right transition duration-500  inset-0">
              <h3 className=" text-white text-sm sm:text-base font-semibold group-hover:translate-x-0 opacity-0 group-hover:opacity-100 translate-x-5 transition duration-700">
                {card.name ? card.name : "Need to put the new smart one."}
              </h3>
            </div>
          </motion.div>
        ))}
        <motion.div
          variants={itemVariants}
          className=" relative group p-7 hidden sm:flex col-start-2 col-end-4 lg:col-start-3 lg:col-end-7 row-start-2 bg-[#3c2837] text-white  flex-col justify-center items-center"
        >
          <h1 className=" text-center font-semibold text-lg">
            We’re always on the look out for passionate people.
          </h1>
          <p className=" text-center">
            If you’d like to join our amazing team, get in touch.
          </p>
          <div className=" absolute bottom-0 right-0 flex items-center justify-center bg-red-500 w-10 h-10 overflow-hidden">
            <HiArrowNarrowRight className=" absolute transition duration-500 group-hover:translate-x-8 text-lg" />
            <HiArrowNarrowRight className=" absolute transition duration-500 group-hover:translate-x-0 -translate-x-10 text-lg" />
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="group w-full aspect-square bg-[#3c2837] text-white md:text-2xl"
        >
          {isSeeMore ? (
            <div
              onClick={handleSeeMore}
              className=" w-full h-full flex flex-col gap-5 justify-center items-center"
            >
              <span className=" text-center">
                {" "}
                + {profileCards.length - count.current}
              </span>
              <h3 className=" text-center">View all</h3>
            </div>
          ) : (
            <div
              onClick={handleSeeLess}
              className=" w-full h-full flex justify-center items-center text-center"
            >
              View less
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Profiles;
