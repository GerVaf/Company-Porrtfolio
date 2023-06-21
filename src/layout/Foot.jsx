import React from "react";
import { IoIosReturnRight } from "../../node_modules/react-icons/io";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagram,
  FaFacebookMessenger,
} from "../../node_modules/react-icons/fa";
const Foot = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex bg-white  justify-center">
      <div className="justify-center flex gap-16 flex-col items-center w-[90%]">
        <p className="text-3xl font-extrabold text-[#D5333E]">
          Let's have a chat!
        </p>
        
        {/* cate  */}
        <div className="flex flex-wrap justify-center gap-10">
          <div className=" border-r hover:border-r-4 hover:border-[#D5333E] duration-300 transition w-72 border-black py-5 flex flex-col gap-5 items-start hover:text-[#D5333E] ">
            <p className="text-3xl font-bold">
              Build <IoIosReturnRight className=" " />
            </p>
            <p className="text-[12px]">Help you build something</p>
          </div>
          <div className=" border-r hover:border-r-4 hover:border-[#D5333E] duration-300 transition w-72 border-black py-5 flex flex-col gap-5 items-start hover:text-[#D5333E] ">
            <p className="text-3xl font-bold">
              Co-incubate <IoIosReturnRight className=" " />
            </p>
            <p className="text-[12px]">Co-incubate an idea together</p>
          </div>
          <div className=" border-r hover:border-r-4 hover:border-[#D5333E] duration-300 transition w-72 border-black py-5 flex flex-col gap-5 items-start hover:text-[#D5333E] ">
            <p className="text-3xl font-bold">
              Customise <IoIosReturnRight className=" " />
            </p>
            <p className="text-[12px]">
              Customise a solution for your business
            </p>
          </div>
          <div className=" border-r hover:border-r-4 hover:border-[#D5333E] duration-300 transition w-72 border-black py-5 flex flex-col gap-5 items-start hover:text-[#D5333E] ">
            <p className="text-3xl font-bold">
              Organise <IoIosReturnRight className=" " />
            </p>
            <p className="text-[12px]">Organise learning sessions with us</p>
          </div>
          <div className=" border-r hover:border-r-4 hover:border-[#D5333E] duration-300 transition w-72 border-black py-5 flex flex-col gap-5 items-start hover:text-[#D5333E]">
            <p className="text-3xl font-bold">
              Tech for Hire <IoIosReturnRight />
            </p>
            <p className="text-[12px]">Hire experienced tech talents</p>
          </div>
        </div>

        {/* icons  */}
        <div className="text-3xl cursor-pointer flex gap-10 sm:gap-16 ">
          <div className=" hover:text-[#D5333E] duration-300 transition">
            <FaFacebookSquare />
          </div>
          <div className=" hover:text-[#D5333E] duration-300 transition">
            <FaTwitterSquare />
          </div>
          <div className=" hover:text-[#D5333E] duration-300 transition">
            <FaFacebookMessenger />
          </div>
          <div className=" hover:text-[#D5333E] duration-300 transition">
            <FaInstagram />
          </div>
        </div>

        {/* Copyright  */}
        <div>
          <span className="font-bold">
            Copyright &copy; {currentYear} HashTag . All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Foot;
