import React from "react";

const Feature = () => {
  const featureData = [
    {
      id: 1,
      img: "https://www.codigo.co/_next/image?url=https%3A%2F%2Fcdn.codigo.co%2Fuploads%2F2018%2F08%2FheroImg-7rewards%402x.png&w=3840&q=85",
      title: "7Rewards-Mobile Application",
      co_title: "Convenience has its rewards",
      text: "Buy whatever you need from any 7-Eleven branches islandwide and get rewarded for it. Simply scan your personal 7Rewards barcode in the app to earn stamps. When you'vecollected enough stamps, make your selection from a range of goodies and redeem.",
    },
    {
      id: 2,
      img: "https://www.codigo.co/_next/image?url=https%3A%2F%2Fcdn.codigo.co%2Fuploads%2F2018%2F08%2FheroImg-fairpriceOnline%402x.png&w=3840&q=85",
      title: "FairPrice Online-Ecommerce Website",
      co_title: "Codigo’s favourite local grocer",
      text: "A complete design overhaul to elevate FPOL’s digital likability through better user experience and modern interface design. We created a smoother and more delightful shopping experience for all customers, old and new.",
    },
    {
      id: 3,
      img: "https://www.codigo.co/_next/image?url=https%3A%2F%2Fcdn.codigo.co%2Fuploads%2F2018%2F12%2FcomfortDelGro-hero%402x.png&w=3840&q=85",
      title: "ComfortDelGro-Mobile Application (iOS/Android)",
      co_title: "Your most reliable ride",
      text: "The only ride booking app that allows users to save their everyday or most frequent rides as favourite journeys so everyone can stop trying to pin themselves accurately on the map. This is just one of the many subtle functions included in the ComfortDelgro mobile app that sets it apart from the tough competition out there.",
    },
  ];
  return (
    <div className=" flex justify-center items-center flex-col ">
      {featureData?.map((el) => {
        return (
          <div
          key={el.id}
            className={`flex ${
              el.id == 2 && " flex-row-reverse"
            } items-center gap-10 w-[70%] h-[75vh]`}
          >
            {/* img part */}
            <div className="w-6/12">
              <div
                className={`w-[500px] h-[500px] ${
                  el.id == 1 && "bg-[rgb(27,164,85)]"
                }
                  ${el.id == 2 && "bg-[rgb(245,245,245)]"}
                  ${
                    el.id == 3 && "bg-[rgb(25,70,132)]"
                  } bg-black flex justify-center items-center rounded-full`}
              >
                <img className=" w-[450px]" src={el.img} alt="" />
              </div>
            </div>
            {/* text part  */}
            <div className="w-5/12 flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <h1 className="text-[45px] font-bold">{el.title}</h1>
                <h2 className="text-[25px] font-semibold">{el.co_title}</h2>
              </div>
              <p className=" text-md">{el.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feature;
