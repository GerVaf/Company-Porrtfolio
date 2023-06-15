import React, { useEffect, useState } from "react";
import { workTitle as title } from "../data/work";
import { workBody as data } from "../data/work";
import { BsGear, BsGrid, BsLaptop, BsPhone } from "react-icons/bs";

const Home = () => {
  const [active, setActive] = useState(1);

  const filterData = data.filter((item) =>
    item.titleId.find((id) => id === active)
  );

  return (
    <div className="text-white    ">
      {/* Heading */}
      <div className=" py-[8rem] max-w-5xl mx-auto p-4">
        <div className="text-6xl font-bold leading-[5rem]">
          <h1 className="flex flex-col ">
            Here’s 5% of <span> our published work.</span>
          </h1>{" "}
          <span className="text-black">See 100% of our power.</span>
        </div>
        <div className="pt-[3rem] flex items-end justify-between ">
          <div className="grid grid-cols-3 gap-3 gap-x-6">
            {title.map((item) => (
              <div
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`p-2 cursor-pointer transition ease-in-out duration-200 ${
                  active === item.id && " font-extrabold"
                }`}
              >
                <h1 className="min-w-[13rem] tracking-wider">{item.name}</h1>
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
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 animation_one">
        {filterData.map((item) => (
          <div
            key={item.id}
            className={`relative w-full h-[17.5rem] lg:h-[30rem]   ${
              item.img.sizeLg && "lg:col-span-2"
            }`}
          >
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black hover:opacity-50 z-10 transition ease-in-out duration-500 cursor-pointer"></div>

            <img
              src={item.img.src}
              className="w-full h-full hover:overflow-hidden object-cover transition ease-in-out duration-500 "
              alt=""
            />

            {/* <div className="w-full h-full absolute top-0 left-0 p-6 flex flex-col z-20 "> */}
            <div className="z-20 absolute top-10 left-10 w-fit  flex flex-col flex-1">
              <div className="flex -ml-1 gap-1 text-sm">
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
              <p className="py-1 font-bold text-lg">{item.name}</p>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
