import React from "react";

const Logo = () => {
  const logo = [
    {
      id: 1,
      img: "https://www.codigo.co/images/logos/brother.svg",
    },
    {
      id: 2,
      img: "https://www.codigo.co/images/logos/furama.svg",
    },
    {
      id: 3,
      img: "https://www.codigo.co/images/logos/HBO.svg",
    },
    {
      id: 4,
      img: "https://www.codigo.co/images/logos/isetan.svg",
    },
    {
      id: 5,
      img: "https://www.codigo.co/images/logos/OCBC.svg",
    },
    {
      id: 6,
      img: "https://www.codigo.co/images/logos/SATS.svg",
    },
    {
      id: 7,
      img: "https://www.codigo.co/images/logos/suntory.svg",
    },
    {
      id: 8,
      img: "https://www.codigo.co/images/logos/wildlife-reserves.svg",
    },
  ];
  return (
    <div className="text-white flex justify-center items-center">
      <div className="w-[70%] flex flex-col gap-16 ">
        <p className="sm:text-[35px] text-xl font-bold flex flex-col justify-center items-center">
          Award Winning Mobile App and Web Development Company <span>Based in
          Singapore</span>
        </p>
        {/* Logo */}
        <div className="flex flex-wrap gap-5 sm:gap-32 cursor-pointer justify-center">
          {logo?.map((el) => {
            return <img className=" w-28 sm:w-44" key={el.id} src={el.img} alt="" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Logo;
