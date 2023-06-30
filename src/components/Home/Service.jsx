import React from "react";

const Service = () => {
  const left = [
    {
      id: 1,
      title: "User Experience",
      text: "UX is the core to everything we build in Codigo. We take user research, competitive analysis, wireframes, user flows, content maps etc. very seriously.",
      img: "https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fux.png&w=3840&q=85",
    },
    {
      id: 2,
      title: "Consultancy",
      text: "Ready to take the first step? Let us help with a minimum viable product. Tap on our brains and experience to create a semi-product to test the waters. Consult us on user experience, how the product could look like and turn it into a rapid prototype.",
      img: "https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fco.png&w=3840&q=85",
    },
    {
      id: 3,
      title: "Web Development",
      text: "Websites, microsites (yes, they still exist), web apps - responsive, powered by WordPress or supported by a bespoke CMS. No screen sizes scare us, only IE does.",
      img: "https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fweb.png&w=3840&q=85",
    },
    {
      id: 4,
      title: "Emering Tech",
      text: "Bluetooth, beacon, NFC, Augmented reality, IoT and more - we know and we have all these buzzwords in our office. We put Superman in AR before Pokemon Go did.",
      img: "https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fet.png&w=3840&q=85",
    },
  ];

  const right = [
    {
      id: 1,
      title: "Interface Desgin",
      text: "Form & Function co-exists in Codigo.We keep ourselves constantly inspired with top trends in the design industry to craft gorgeous interactions for your brand.",
      img: "https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fui.png&w=3840&q=85",
    },
    {
      id: 2,
      title: "Mobile Development",
      text: "Native, ReactNative, payment gateway integration, bespoke CMS, consuming APIs from existing sources and all things mobile app relevant.",
      img: "https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fmob.png&w=3840&q=85",
    },
    {
      id: 3,
      title: "CMS",
      text: "We build fully customisable and readily expandable Content Management System with a dashboard so you can monitor the activities on your product 24/7.",
      img: "https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fcms.png&w=3840&q=85",
    },
    {
      id: 4,
      title: "Coaching",
      text: "Attend our Masterclasses with the Codigo syllabus or talk to us to customise sessions just for your business teams.",
      img: "https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fcoach.png&w=3840&q=85",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center sm:gap-16 gap-10">
      <h1 className="text-3xl font-bold ">
        What we can do for you or your business
      </h1>
      {/* Service  */}
      <div className="flex sm:flex-row flex-col gap-10 sm:justify-around">
        <div className="sm:w-5/12 flex flex-col gap-10 items-center justify-center">
          {left?.map((el) => {
            return (
              <div key={el.id} className="flex gap-5 sm:gap-10 sm:flex-row flex-col items-center">
                <div
                  className={` ${el.id === 1 && "bg-[rgb(255,255,101)]"} ${
                    el.id === 2 && "bg-[rgb(179,38,46)]"
                  } ${el.id === 3 && "bg-[rgb(255,141,110)]"} ${
                    el.id === 4 && "bg-[rgb(72,50,69)]"
                  } rounded-full flex justify-center items-center  w-[150px] h-[150px]`}
                >
                  <img className="w-[150px]" src={el.img} alt="" />
                </div>
                <div className="sm:w-7/12 px-10 sm:px-0 items-center flex flex-col gap-3">
                  <p className="font-bold text-xl">{el.title}</p>
                  <span>{el.text}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="sm:w-5/12 flex flex-col gap-10 items-center justify-center">
          {right?.map((el) => {
            return (
              <div key={el.id} className="flex gap-10 sm:flex-row flex-col items-center">
                <div
                  className={` ${el.id === 1 && "bg-[rgb(238,217,220)]"} ${
                    el.id === 2 && "bg-[rgb(25,136,232)]"
                  } ${el.id === 3 && "bg-[rgb(24,161,82)]"} ${
                    el.id === 4 && "bg-[rgb(136,57,85)]"
                  } rounded-full flex justify-center items-center  w-[150px] h-[150px]`}
                >
                  <img className="w-[150px]" src={el.img} alt="" />
                </div>
                <div className="sm:w-7/12 px-10 sm:px-0 items-center flex flex-col gap-3">
                  <p className="font-bold text-xl">{el.title}</p>
                  <span>{el.text}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
