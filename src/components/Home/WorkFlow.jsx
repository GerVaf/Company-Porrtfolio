import React, { useEffect } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const WorkFlow = () => {
  const UX = [
    {
      id: 1,
      title: "Because we are all users.",
      text: "There are 4 key stages to our UX process.",
    },
    {
      id: 2,
      title: "Stage I - UNDERSTAND",
      text: "Through collaborative client sessions and hands-on experience of the service or product, we aim to fully apprehend all business objectives to kickstart our UX process via Requirements & Constraints Gathering, Field Studies, Stakeholder interviews, User interviews, Google Design Sprints and more.",
    },
    {
      id: 3,
      title: "Stage II - EXPLORE",
      text: "Understanding what the target audience’ needs and wants then taking a deep dive into the varied user behaviours to define the core architecture of the product’s user experience through processes like User Focus Groups, Quantitative Research / Qualitative Research, Competitive Analysis, Card Sorting, User Stories, Personas Building and Journey Mapping.",
    },
    {
      id: 4,
      title: "Stage III - CONSTRUCT",
      text: "Bringing UX to life through thorough content maps, meticulous and high fidelity wireframes and beautiful designs of various screen sizes with Information Architecture, Content Strategy, User Flows, Wireframes and Screen Designs.",
    },
    {
      id: 5,
      title: "Stage IV - VALIDATE",
      text: "We take user feedback seriously. Different degrees of user tests are conducted with wireframe/design prototypes to help validate our thinking and intent.",
    },
  ];
  const UI = [
    {
      id: 1,
      title: "We live to design.",
      text: "Our design motto: Don’t be the same, be better. (as written on our office wall)",
    },
    {
      id: 2,
      title: "INTERPRETING WIREFRAMES",
      text: "Our UI designers do not colour the wireframes, we interpret and handpick the most ideal font, typography, iconography and photography style to present your product in the most appealing manner. We take effort and pride in designing the most intuitive interface for anyone experiencing the product.",
    },
    {
      id: 3,
      title: "CONSTANTLY CHALLENGED",
      text: "We never design any product similar. We believe in creating a distinctive look & feel for any of our clients. We learn from every product we’ve designed and apply the learnings to design a fresher and comfortable experience for the next one.",
    },
    {
      id: 4,
      title: "INTERACTION IS KING",
      text: "Beyond the screen designs, our team of designers work closely with our developers during the entire development process to infuse delightful interactions and visual feedback into our products to create an impression that will stick with all users.",
    },
    {
      id: 5,
      title: "BRAND GUIDELINES & BEYOND",
      text: "We know how to work our way with brand guidelines and push the design to greater heights that will constantly remind your users of your brand hence keeping you top of mind.",
    },
  ];
  const Mobile = [
    {
      id: 1,
      title: "We’re native & hybrid.",
      text: "Our strong team of engineers are passionate about coding, anime and all things tech.",
    },
    {
      id: 2,
      title: "STARTING THE RIGHT WAY",
      text: "Our tech team is involved right from the beginning, Tech leads participate in the Software Requirements Specifications process, anticipate and suggest appropriate tech stacks considering your business existing system architecture if applicable or simply recommend the best solution according to the business needs.",
    },
    {
      id: 3,
      title: "ALL STACK, ANY STACK",
      text: "We have expertise across these stacks - Kotlin, Java, Swift, ObjectiveC, React Native & Flutter and will be ready for anything Apple or Google will spin up in future.For every project, a tech team will be set up with a lead and min. 2 engineers per OS (native) to ensure maximum efficacy and code hygience. Also, the knowledge will be shared across the entire tech team as well as resolving any potential coding difficulties with the team’s collective experience of coding numerous products of various industries and complexities.",
    },
    {
      id: 4,
      title: "ANALYTICS CHECKED",
      text: "All products or platforms we built are by defaulted integrated with Google Analytics or Firebase or your own analytical tool to keep track of your product’s performance and your users’ behaviours.",
    },
    {
      id: 5,
      title: "KEEPING US AHEAD",
      text: "Via weekly sharing sessions, the tech team shares latest industry standards, updates as well new ways to work more efficiently with one another so we are never behind any upcoming tech trends.",
    },
  ];
  const Website = [
    {
      id: 1,
      title: "Responsive is a default.",
      text: "Any screen size, any browser, any kind of website - microsite, web platform or web app.",
    },
    {
      id: 2,
      title: "STARTING THE RIGHT WAY",
      text: "Our web team is involved right from the beginning, Tech leads participate in the Software Requirements Specifications process, anticipate and suggest appropriate tech stacks considering your business existing system architecture if applicable or simply recommend the best solution according to the business needs.",
    },
    {
      id: 3,
      title: "RESPONSIVE IS A MUST",
      text: "Making sure we cover mobile web is a default in Codigo, our web team strives to translate the immersive desktop experience as closely as possible to our tiny phone screens. Our web team also takes pride in creating the exact experience across all common browsers,like Chrome, Safari, Firefox and Edge, on both PC and Mac.",
    },
    {
      id: 4,
      title: "ANALYTICS CHECKED",
      text: "All products or platforms we built are by defaulted integrated with Google Analytics or Firebase or your own analytical tool to keep track of your product’s performance and your users’ behaviours.",
    },
    {
      id: 5,
      title: "KEEPING US AHEAD",
      text: "Via weekly sharing sessions, the web team shares latest industry standards, updates as well new ways to work more efficiently with one another so we are never behind any upcoming tech trends.",
    },
  ];
  const CMS = [
    {
      id: 1,
      title: "Your business’ command centre.",
      text: "Building a fully customised and readily expandable CMS to control content and harvest user data.",
    },
    {
      id: 2,
      title: "INTEGRATION-READY",
      text: "We are proficient and recognised in Amazon Web Services and Microsoft Azure. Our tech team can work independently to provide guidance on your infrastructure set-up or collaborate with your existing partner or internal team to ensure a smooth integration for your product.",
    },
    {
      id: 3,
      title: "DASHBOARD ENVY",
      text: "All our bespoke CMS include a dashboard for a god’s eye view of how your product is performing or operating with defined access for your own internal stakeholders or users. User activities and behaviour are all recorded via our backend and can be allowed for data extraction for you to optimise or improve your product’s performance.",
    },
    {
      id: 4,
      title: "SECURITY IS KEY",
      text: "We take users' privacy very seriously. Data security and encryption is top priority for all projects we build and we are always prepared to work with your team for rigorous penetration tests.",
    },
    {
      id: 5,
      title: "SKIP THE MAINTENANCE CONTRACT",
      text: "Your team and yourself will also have access to create or edit any content published on your mobile apps or websites easily via the CMS at your convenience without constantly updating your mobile apps in App Store or Google Play.",
    },
  ];

  const [active, setActive] = useState(UX);
  const [isMounted, setIsMounted] = useState(false);

  const handleCategoryClick = (category, button) => {
    setIsMounted(false);
    setTimeout(() => {
      setActive(category);
      setActiveButton(button);
      setIsMounted(true);
    }, 200);
  };
  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  const [activeButton, setActiveButton] = useState("UX");
  return (
    <div className="flex flex-col sm:gap-20 justify-center items-center">
      <h1 className="sm:text-[45px] text-2xl mb-10 sm:mb-0 font-bold ">The Codigo Process</h1>
      <div className="w-[90%] gap-10 sm:w-[70%] flex sm:flex-row flex-col-reverse sm:justify-around">
        {/* text side  */}
        <div className="sm:w-8/12 flex flex-col gap-5 sm:gap-16">
          <AnimatePresence mode="wait">
            {isMounted &&
              active.map((el) => {
                return (
                  <motion.div
                    key={el.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-2 sm:gap-5"
                  >
                    <h1 className="font-bold text-lg sm:text-xl">{el.title}</h1>
                    <p className="text-sm sm:text-lg">{el.text}</p>
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </div>
        {/* Button side */}
        <div className="sm:w-3/12 flex flex-wrap sm:flex-col gap-5">
          <div className="flex items-center gap-5">
            <button
              onClick={() => handleCategoryClick(UX, "UX")}
              className={`sm:text-4xl font-bold sm:w-24 sm:h-24 w-16 h-10 rounded-full ${
                activeButton === "UX"
                  ? "bg-white text-[rgb(213,51,62)]"
                  : " border-2 "
              }`}
            >
              UX
            </button>
            <p className="font-bold sm:text-2xl sm:w-7/12">User Experiences</p>
          </div>
          <div className="flex items-center gap-5">
            <button
              onClick={() => handleCategoryClick(UI, "UI")}
              className={`sm:text-4xl font-bold sm:w-24 sm:h-24 w-16 h-10 rounded-full ${
                activeButton === "UI"
                  ? "bg-white text-[rgb(213,51,62)]"
                  : " border-2 "
              }`}
            >
              UI
            </button>
            <p className="font-bold sm:text-2xl sm:w-7/12">Interface Design</p>
          </div>
          <div className="flex items-center gap-5">
            <button
              onClick={() => handleCategoryClick(Mobile, "Mobile")}
              className={`sm:text-4xl font-bold sm:w-24 sm:h-24 w-16 h-10 rounded-full ${
                activeButton === "Mobile"
                  ? "bg-white text-[rgb(213,51,62)]"
                  : " border-2 "
              }`}
            >
              M
            </button>
            <p className="font-bold sm:text-2xl sm:w-7/12">Mobile App Development</p>
          </div>
          <div className="flex items-center gap-5">
            <button
              onClick={() => handleCategoryClick(Website, "Website")}
              className={`sm:text-4xl font-bold sm:w-24 sm:h-24 w-16 h-10 rounded-full ${
                activeButton === "Website"
                  ? "bg-white text-[rgb(213,51,62)]"
                  : " border-2 "
              }`}
            >
              W
            </button>
            <p className="font-bold sm:text-2xl sm:w-7/12">Website Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
