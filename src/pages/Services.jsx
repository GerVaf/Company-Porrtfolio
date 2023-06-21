import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const Services = () => {
  const [isMouseInside1, setIsMouseInside1] = useState(false);
  const [isMouseInside2, setIsMouseInside2] = useState(false);
  const [isMouseInside3, setIsMouseInside3] = useState(false);
  const [isMouseInside4, setIsMouseInside4] = useState(false);
  const [isMouseInside5, setIsMouseInside5] = useState(false);
  const [isMouseInside6, setIsMouseInside6] = useState(false);
  const [isMouseInside7, setIsMouseInside7] = useState(false);
  const [isMouseInside8, setIsMouseInside8] = useState(false);

  return (
    <div className="flex justify-center bg-white">
      <div className=" w-[90%] sm:w-[60%] flex flex-col my-32">
        {/* hero section  */}
        <div className="flex flex-col gap-7">
          <div>
            <h1 className="text-[70px] font-bold ">We build digital</h1>
            <h1 className="text-[70px] font-bold  text-red-500">
              for a living.
            </h1>
          </div>
          <div className="flex flex-col sm:w-[600px] gap-10">
            <p>
              Codigo comprises a team of brilliant minds and innovative
              individuals who create digital products people love to use.
            </p>
            <p>
              We believe that seamless, user-centric and meaningful experiences
              transcend mediums and touchpoints.
            </p>
          </div>
        </div>

        {/* service section  */}
        <div className="flex flex-col sm:overflow-visible overflow-hidden py-10 justify-center items-center sm:flex-row sm:flex-wrap">
          {/* 1 */}
          <div
            onMouseEnter={() => {
              setIsMouseInside1(true);
            }}
            onMouseLeave={() => {
              setIsMouseInside1(false);
            }}
            className="sm:w-2/6 h-[500px] cursor-pointer flex flex-col justify-center items-center relative"
          >
            {/* parent div with hover effects */}
            {isMouseInside1 ? (
              <>
                {/* // Final */}
                <motion.div
                  className=" bg-[rgb(255,255,101)] flex flex-col justify-center items-center rounded-full group"
                  animate={{
                    width: "450px", // Adjust the width here
                    height: "450px", // Adjust the height here
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {/* hover text */}
                  <motion.div
                    className=" flex flex-col justify-center items-center w-[300px] "
                    animate={{ opacity: 1, y: -40, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-2 mb-10 items-center">
                      <h1 className="font-bold text-[12px]">User Experience</h1>
                      <h1 className="font-bold text-xl">We are all users</h1>
                    </div>
                    <p className="text-[15px]">
                      With over 200 digital projects and counting, we get what
                      users want and need pretty easily. UX is the core to
                      everything we build. In Codigo, we take user research,
                      competitive analysis, wireframes, user flows, content maps
                      very seriously.
                    </p>
                  </motion.div>
                  {/* image */}
                  <motion.div
                    className=" absolute flex justify-center items-center"
                    animate={{ opacity: 1, y: 220, scale: 0.5 }}
                    exit={{ opacity: 1, y: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <img
                      src="https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fux.png&w=3840&q=85"
                      alt=""
                    />
                  </motion.div>
                </motion.div>
                {/* text */}
                <motion.div className=" bottom-0 absolute overflow-hidden">
                  <motion.div
                    className="flex flex-col  justify-center items-center"
                    animate={{ y: -100 }}
                    exit={{ y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <h1 className="text-2xl font-bold">User Experience</h1>
                    <p>How users interact</p>
                  </motion.div>
                </motion.div>
              </>
            ) : (
              <>
                {/* // Initial */}
                <motion.div
                  className=" bg-[rgb(255,255,101)] flex flex-col justify-center items-center rounded-full group"
                  initial={{
                    width: "200px",
                    height: "200px",
                  }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                >
                  {/* hover text */}
                  <motion.div
                    className=" flex flex-col justify-center items-center w-[300px] "
                    initial={{ opacity: 0, y: 30, scale: 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-2 mb-10 items-center">
                      <h1 className="font-bold text-[12px]">User Experience</h1>
                      <h1 className="font-bold text-xl">We are all users</h1>
                    </div>
                    <p className="text-[15px]">
                      With over 200 digital projects and counting, we get what
                      users want and need pretty easily. UX is the core to
                      everything we build. In Codigo, we take user research,
                      competitive analysis, wireframes, user flows, content maps
                      very seriously.
                    </p>
                  </motion.div>
                  {/* image */}
                  <motion.div
                    className="  absolute flex justify-center items-center"
                    initial={{ opacity: 1, y: 0, scale: 0.6 }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                  >
                    <img
                      src="https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fux.png&w=3840&q=85"
                      alt=""
                    />
                  </motion.div>
                </motion.div>
                {/* text */}
                <motion.div className=" bottom-0 overflow-hidden absolute ">
                  <motion.div
                    className="flex flex-col items-center gap-3"
                    initial={{ y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <h1 className="text-2xl font-bold">User Experience</h1>
                    <p className="text-[12px] sm:text-[16px]">
                      How users interact
                    </p>
                  </motion.div>
                </motion.div>
              </>
            )}
          </div>
          {/* 2 */}
          <div
            onMouseEnter={() => {
              setIsMouseInside2(true);
            }}
            onMouseLeave={() => {
              setIsMouseInside2(false);
            }}
            className="sm:w-2/6 h-[500px] cursor-pointer flex flex-col justify-center items-center relative"
          >
            {/* parent div with hover effects */}
            {isMouseInside2 ? (
              <>
                {/* // Final */}
                <motion.div
                  className=" bg-[rgb(238,217,220)] flex flex-col justify-center items-center rounded-full group"
                  animate={{
                    width: "450px", // Adjust the width here
                    height: "450px", // Adjust the height here
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {/* hover text */}
                  <motion.div
                    className=" flex flex-col justify-center items-center w-[300px] "
                    animate={{ opacity: 1, y: -40, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-2 mb-10 items-center">
                      <h1 className="font-bold text-[12px]">
                        Interface Desgin
                      </h1>
                      <h1 className="font-bold text-xl">We Live to desgin</h1>
                    </div>
                    <p className="text-[15px]">
                      We have pixel OCD. We keep ourselves constantly inspired
                      with the hype and trends in the design industry to craft
                      gorgeous interactions for your brand.
                    </p>
                  </motion.div>
                  {/* image */}
                  <motion.div
                    className=" absolute flex justify-center items-center"
                    animate={{ opacity: 1, y: 220, scale: 0.5 }}
                    exit={{ opacity: 1, y: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <img
                      src="https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fui.png&w=3840&q=85"
                      alt=""
                    />
                  </motion.div>
                </motion.div>
                {/* text */}
                <motion.div className=" bottom-0 absolute overflow-hidden">
                  <motion.div
                    className="flex flex-col  justify-center items-center"
                    animate={{ y: -100 }}
                    exit={{ y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <h1 className="text-2xl font-bold">Interface Desgin</h1>
                    <p className="text-[12px]">For all screens in the world</p>
                  </motion.div>
                </motion.div>
              </>
            ) : (
              <>
                {/* // Initial */}
                <motion.div
                  className=" bg-[rgb(238,217,220)] flex flex-col justify-center items-center rounded-full group"
                  initial={{
                    width: "200px",
                    height: "200px",
                  }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                >
                  {/* hover text */}
                  <motion.div
                    className=" flex flex-col justify-center items-center w-[300px] "
                    initial={{ opacity: 0, y: 30, scale: 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-2 mb-10 items-center">
                      <h1 className="font-bold text-[12px]">User Experience</h1>
                      <h1 className="font-bold text-xl">We are all users</h1>
                    </div>
                    <p className="text-[15px]">
                      We have pixel OCD. We keep ourselves constantly inspired
                      with the hype and trends in the design industry to craft
                      gorgeous interactions for your brand.
                    </p>
                  </motion.div>
                  {/* image */}
                  <motion.div
                    className="  absolute flex justify-center items-center"
                    initial={{ opacity: 1, y: 0, scale: 0.6 }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                  >
                    <img
                      src="https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fui.png&w=3840&q=85"
                      alt=""
                    />
                  </motion.div>
                </motion.div>
                {/* text */}
                <motion.div className=" bottom-0 overflow-hidden absolute ">
                  <motion.div
                    className="flex flex-col items-center gap-3"
                    initial={{ y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <h1 className="text-2xl font-bold">Interface Desgin</h1>
                    <p className="text-[12px]">For all screens in the world</p>
                  </motion.div>
                </motion.div>
              </>
            )}
          </div>
          {/* 3 */}
          <div
            onMouseEnter={() => {
              setIsMouseInside3(true);
            }}
            onMouseLeave={() => {
              setIsMouseInside3(false);
            }}
            className="sm:w-2/6 h-[500px] cursor-pointer flex flex-col justify-center items-center relative"
          >
            {/* parent div with hover effects */}
            {isMouseInside3 ? (
              <>
                {/* // Final */}
                <motion.div
                  className=" bg-[rgb(179,38,46)] flex flex-col justify-center items-center rounded-full group"
                  animate={{
                    width: "450px", // Adjust the width here
                    height: "450px", // Adjust the height here
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {/* hover text */}
                  <motion.div
                    className=" text-white flex flex-col justify-center items-center w-[300px] "
                    animate={{ opacity: 1, y: -40, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-2 mb-10 items-center">
                      <h1 className="font-bold text-[12px]">Consultancy</h1>
                      <h1 className="font-bold text-xl">
                        We can help validate your ideas.
                      </h1>
                    </div>
                    <p className="text-[15px]">
                      Ready to take the first step? Let us help with a minimum
                      viable product. Tap on our brains and experience to create
                      a semi-product to test the waters. Consult us on user
                      experience, how the product could look like and turn it
                      into a rapid prototype.
                    </p>
                  </motion.div>
                  {/* image */}
                  <motion.div
                    className=" absolute flex justify-center items-center"
                    animate={{ opacity: 1, y: 220, scale: 0.5 }}
                    exit={{ opacity: 1, y: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <img
                      src="https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fco.png&w=3840&q=85"
                      alt=""
                    />
                  </motion.div>
                </motion.div>
                {/* text */}
                <motion.div className=" bottom-0 absolute overflow-hidden">
                  <motion.div
                    className="flex flex-col  justify-center items-center"
                    animate={{ y: -100 }}
                    exit={{ y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <h1 className="text-2xl font-bold">Consultancy</h1>
                    <p className="text-[12px]">For proof-of-concepts</p>
                  </motion.div>
                </motion.div>
              </>
            ) : (
              <>
                {/* // Initial */}
                <motion.div
                  className=" bg-[rgb(179,38,46)] flex flex-col justify-center items-center rounded-full group"
                  initial={{
                    width: "200px",
                    height: "200px",
                  }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                >
                  {/* hover text */}
                  <motion.div
                    className="text-white flex flex-col justify-center items-center w-[300px] "
                    initial={{ opacity: 0, y: 30, scale: 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-2 mb-10 items-center">
                      <h1 className="font-bold text-[12px]">Consultancy</h1>
                      <h1 className="font-bold text-xl">
                        We can help validate your ideas.
                      </h1>
                    </div>
                    <p className="text-[15px]">
                      Ready to take the first step? Let us help with a minimum
                      viable product. Tap on our brains and experience to create
                      a semi-product to test the waters. Consult us on user
                      experience, how the product could look like and turn it
                      into a rapid prototype.
                    </p>
                  </motion.div>
                  {/* image */}
                  <motion.div
                    className="  absolute flex justify-center items-center"
                    initial={{ opacity: 1, y: 0, scale: 0.6 }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                  >
                    <img
                      src="https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fco.png&w=3840&q=85"
                      alt=""
                    />
                  </motion.div>
                </motion.div>
                {/* text */}
                <motion.div className=" bottom-0 overflow-hidden absolute ">
                  <motion.div
                    className="flex flex-col items-center gap-3"
                    initial={{ y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <h1 className="text-2xl font-bold">Consultancy</h1>
                    <p className="text-[12px]">For proof-of-concepts</p>
                  </motion.div>
                </motion.div>
              </>
            )}
          </div>
          {/* 4 */}
          <div
            onMouseEnter={() => {
              setIsMouseInside4(true);
            }}
            onMouseLeave={() => {
              setIsMouseInside4(false);
            }}
            className="sm:w-2/6 h-[500px] cursor-pointer flex flex-col justify-center items-center relative"
          >
            {/* parent div with hover effects */}
            {isMouseInside4 ? (
              <>
                {/* // Final */}
                <motion.div
                  className=" bg-[rgb(25,136,232)] flex flex-col justify-center items-center rounded-full group"
                  animate={{
                    width: "450px", // Adjust the width here
                    height: "450px", // Adjust the height here
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {/* hover text */}
                  <motion.div
                    className="text-white flex flex-col justify-center items-center w-[300px] "
                    animate={{ opacity: 1, y: -40, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-2 mb-10 items-center">
                      <h1 className="font-bold text-[12px]">
                        Mobile Development
                      </h1>
                      <h1 className="font-bold text-xl">
                        We are Apple & Android friendly.
                      </h1>
                    </div>
                    <p className="text-[15px]">
                      Native, ReactNative, payment gateway integration, bespoke
                      CMS, consuming APIs from existing sources and all things
                      mobile app relevant. We’ve mostly done it all.
                    </p>
                  </motion.div>
                  {/* image */}
                  <motion.div
                    className=" absolute flex justify-center items-center"
                    animate={{ opacity: 1, y: 220, scale: 0.5 }}
                    exit={{ opacity: 1, y: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <img
                      src="https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fmob.png&w=3840&q=85"
                      alt=""
                    />
                  </motion.div>
                </motion.div>
                {/* text */}
                <motion.div className=" bottom-0 absolute overflow-hidden">
                  <motion.div
                    className="flex flex-col  justify-center items-center"
                    animate={{ y: -100 }}
                    exit={{ y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <h1 className="text-2xl font-bold">Mobile Development</h1>
                    <p className="text-[12px]">IOS & Android</p>
                  </motion.div>
                </motion.div>
              </>
            ) : (
              <>
                {/* // Initial */}
                <motion.div
                  className=" bg-[rgb(25,136,232)] flex flex-col justify-center items-center rounded-full group"
                  initial={{
                    width: "200px",
                    height: "200px",
                  }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                >
                  {/* hover text */}
                  <motion.div
                    className="text-white flex flex-col justify-center items-center w-[300px] "
                    initial={{ opacity: 0, y: 30, scale: 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-2 mb-10 items-center">
                      <h1 className="font-bold text-[12px]">
                        Mobile Development
                      </h1>
                      <h1 className="font-bold text-xl">
                        We are Apple & Android friendly.
                      </h1>
                    </div>
                    <p className="text-[15px]">
                      Native, ReactNative, payment gateway integration, bespoke
                      CMS, consuming APIs from existing sources and all things
                      mobile app relevant. We’ve mostly done it all.
                    </p>
                  </motion.div>
                  {/* image */}
                  <motion.div
                    className="  absolute flex justify-center items-center"
                    initial={{ opacity: 1, y: 0, scale: 0.6 }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                  >
                    <img
                      src="https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fmob.png&w=3840&q=85"
                      alt=""
                    />
                  </motion.div>
                </motion.div>
                {/* text */}
                <motion.div className=" bottom-0 overflow-hidden absolute ">
                  <motion.div
                    className="flex flex-col items-center gap-3"
                    initial={{ y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <h1 className="text-2xl font-bold">Mobile Development</h1>
                    <p className="text-[12px]">IOS & Android</p>
                  </motion.div>
                </motion.div>
              </>
            )}
          </div>
          {/* 5 */}
          <div
            onMouseEnter={() => {
              setIsMouseInside5(true);
            }}
            onMouseLeave={() => {
              setIsMouseInside5(false);
            }}
            className="sm:w-2/6 h-[500px] cursor-pointer flex flex-col justify-center items-center relative"
          >
            {/* parent div with hover effects */}
            {isMouseInside5 ? (
              <>
                {/* // Final */}
                <motion.div
                  className=" bg-[rgb(255,141,110)] flex flex-col justify-center items-center rounded-full group"
                  animate={{
                    width: "450px", // Adjust the width here
                    height: "450px", // Adjust the height here
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {/* hover text */}
                  <motion.div
                    className=" flex flex-col justify-center items-center w-[300px] "
                    animate={{ opacity: 1, y: -40, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-2 mb-10 items-center">
                      <h1 className="font-bold text-[12px]">Web Development</h1>
                      <h1 className="font-bold text-xl">
                        We weave front-end magic.
                      </h1>
                    </div>
                    <p className="text-[15px]">
                      Web portals, microsites (yes, they still exist), web apps
                      - responsive, powered by WordPress or supported by a
                      bespoke CMS. No screen sizes scare us, only IE does.
                    </p>
                  </motion.div>
                  {/* image */}
                  <motion.div
                    className=" absolute flex justify-center items-center"
                    animate={{ opacity: 1, y: 220, scale: 0.5 }}
                    exit={{ opacity: 1, y: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <img
                      src="https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fweb.png&w=3840&q=85"
                      alt=""
                    />
                  </motion.div>
                </motion.div>
                {/* text */}
                <motion.div className=" bottom-0 absolute overflow-hidden">
                  <motion.div
                    className="flex flex-col  justify-center items-center"
                    animate={{ y: -100 }}
                    exit={{ y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <h1 className="text-2xl font-bold">Web Development</h1>
                    <p className="text-[12px]">
                      For business any shape and size
                    </p>
                  </motion.div>
                </motion.div>
              </>
            ) : (
              <>
                {/* // Initial */}
                <motion.div
                  className=" bg-[rgb(255,141,110)] flex flex-col justify-center items-center rounded-full group"
                  initial={{
                    width: "200px",
                    height: "200px",
                  }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                >
                  {/* hover text */}
                  <motion.div
                    className=" flex flex-col justify-center items-center w-[300px] "
                    initial={{ opacity: 0, y: 30, scale: 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-2 mb-10 items-center">
                      <h1 className="font-bold text-[12px]">Web Development</h1>
                      <h1 className="font-bold text-xl">
                        We weave front-end magic.
                      </h1>
                    </div>
                    <p className="text-[15px]">
                      Web portals, microsites (yes, they still exist), web apps
                      - responsive, powered by WordPress or supported by a
                      bespoke CMS. No screen sizes scare us, only IE does.
                    </p>
                  </motion.div>
                  {/* image */}
                  <motion.div
                    className="  absolute flex justify-center items-center"
                    initial={{ opacity: 1, y: 0, scale: 0.6 }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                  >
                    <img
                      src="https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fweb.png&w=3840&q=85"
                      alt=""
                    />
                  </motion.div>
                </motion.div>
                {/* text */}
                <motion.div className=" bottom-0 overflow-hidden absolute ">
                  <motion.div
                    className="flex flex-col items-center gap-3"
                    initial={{ y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <h1 className="text-2xl font-bold">Web Development </h1>
                    <p className="text-[12px]">
                      For business any shape and size
                    </p>
                  </motion.div>
                </motion.div>
              </>
            )}
          </div>
          {/* 6 */}
          <div
            onMouseEnter={() => {
              setIsMouseInside6(true);
            }}
            onMouseLeave={() => {
              setIsMouseInside6(false);
            }}
            className="sm:w-2/6 h-[500px] cursor-pointer flex flex-col justify-center items-center relative"
          >
            {/* parent div with hover effects */}
            {isMouseInside6 ? (
              <>
                {/* // Final */}
                <motion.div
                  className=" bg-[rgb(24,161,82)] flex flex-col justify-center items-center rounded-full group"
                  animate={{
                    width: "450px", // Adjust the width here
                    height: "450px", // Adjust the height here
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {/* hover text */}
                  <motion.div
                    className="text-white flex flex-col justify-center items-center w-[300px] "
                    animate={{ opacity: 1, y: -40, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-2 mb-10 items-center">
                      <h1 className="font-bold text-[12px]">CMS</h1>
                      <h1 className="font-bold text-xl">We give you data.</h1>
                    </div>
                    <p className="text-[15px]">
                      All bespoke CMS we build comes with a dashboard so you can
                      monitor the activities on your product. Edit or add
                      content at your convenience - we’ll customise everything
                      to your wants and needs.
                    </p>
                  </motion.div>
                  {/* image */}
                  <motion.div
                    className=" absolute flex justify-center items-center"
                    animate={{ opacity: 1, y: 220, scale: 0.5 }}
                    exit={{ opacity: 1, y: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <img
                      src="https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fcms.png&w=3840&q=85"
                      alt=""
                    />
                  </motion.div>
                </motion.div>
                {/* text */}
                <motion.div className=" bottom-0 absolute overflow-hidden">
                  <motion.div
                    className="flex flex-col  justify-center items-center"
                    animate={{ y: -100 }}
                    exit={{ y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <h1 className="text-2xl font-bold">User Experience</h1>
                    <p className="text-[12px]">How users interact</p>
                  </motion.div>
                </motion.div>
              </>
            ) : (
              <>
                {/* // Initial */}
                <motion.div
                  className=" bg-[rgb(24,161,82)] flex flex-col justify-center items-center rounded-full group"
                  initial={{
                    width: "200px",
                    height: "200px",
                  }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                >
                  {/* hover text */}
                  <motion.div
                    className="text-white flex flex-col justify-center items-center w-[300px] "
                    initial={{ opacity: 0, y: 30, scale: 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-2 mb-10 items-center">
                      <h1 className="font-bold text-[12px]">CMS</h1>
                      <h1 className="font-bold text-xl">We give you data.</h1>
                    </div>
                    <p className="text-[15px]">
                      All bespoke CMS we build comes with a dashboard so you can
                      monitor the activities on your product. Edit or add
                      content at your convenience - we’ll customise everything
                      to your wants and needs.
                    </p>
                  </motion.div>
                  {/* image */}
                  <motion.div
                    className="  absolute flex justify-center items-center"
                    initial={{ opacity: 1, y: 0, scale: 0.6 }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                  >
                    <img
                      src="https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fcms.png&w=3840&q=85"
                      alt=""
                    />
                  </motion.div>
                </motion.div>
                {/* text */}
                <motion.div className=" bottom-0 overflow-hidden absolute ">
                  <motion.div
                    className="flex flex-col items-center gap-3"
                    initial={{ y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <h1 className="text-2xl font-bold">CMS</h1>
                    <p className="text-[12px]">Manage your own content</p>
                  </motion.div>
                </motion.div>
              </>
            )}
          </div>
          {/* 7 */}
          <div
            onMouseEnter={() => {
              setIsMouseInside7(true);
            }}
            onMouseLeave={() => {
              setIsMouseInside7(false);
            }}
            className="sm:w-2/6 h-[500px] cursor-pointer flex flex-col justify-center items-center relative"
          >
            {/* parent div with hover effects */}
            {isMouseInside7 ? (
              <>
                {/* // Final */}
                <motion.div
                  className=" bg-[rgb(72,50,69)] flex flex-col justify-center items-center rounded-full group"
                  animate={{
                    width: "450px", // Adjust the width here
                    height: "450px", // Adjust the height here
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {/* hover text */}
                  <motion.div
                    className="text-white flex flex-col justify-center items-center w-[300px] "
                    animate={{ opacity: 1, y: -40, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-2 mb-10 items-center">
                      <h1 className="font-bold text-[12px]">Emerging Tech</h1>
                      <h1 className="font-bold text-xl">
                        We have all the fancy gadgets.
                      </h1>
                    </div>
                    <p className="text-[15px]">
                      Bluetooth, beacon, NFC, Augmented reality, IoT and more -
                      we know and we have all these buzzwords in our office. We
                      put Superman in AR before Pokemon Go did.
                    </p>
                  </motion.div>
                  {/* image */}
                  <motion.div
                    className=" absolute flex justify-center items-center"
                    animate={{ opacity: 1, y: 220, scale: 0.5 }}
                    exit={{ opacity: 1, y: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <img
                      src="https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fet.png&w=3840&q=85"
                      alt=""
                    />
                  </motion.div>
                </motion.div>
                {/* text */}
                <motion.div className=" bottom-0 absolute overflow-hidden">
                  <motion.div
                    className="flex flex-col  justify-center items-center"
                    animate={{ y: -100 }}
                    exit={{ y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <h1 className="text-2xl font-bold">Emerging Teach</h1>
                    <p className="text-[12px]">Because we are geeks</p>
                  </motion.div>
                </motion.div>
              </>
            ) : (
              <>
                {/* // Initial */}
                <motion.div
                  className=" bg-[rgb(72,50,69)] flex flex-col justify-center items-center rounded-full group"
                  initial={{
                    width: "200px",
                    height: "200px",
                  }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                >
                  {/* hover text */}
                  <motion.div
                    className="text-white flex flex-col justify-center items-center w-[300px] "
                    initial={{ opacity: 0, y: 30, scale: 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-2 mb-10 items-center">
                      <h1 className="font-bold text-[12px]">Emerging Tech</h1>
                      <h1 className="font-bold text-xl">
                        We have all the fancy gadgets.
                      </h1>
                    </div>
                    <p className="text-[15px]">
                      Bluetooth, beacon, NFC, Augmented reality, IoT and more -
                      we know and we have all these buzzwords in our office. We
                      put Superman in AR before Pokemon Go did.
                    </p>
                  </motion.div>
                  {/* image */}
                  <motion.div
                    className="  absolute flex justify-center items-center"
                    initial={{ opacity: 1, y: 0, scale: 0.6 }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                  >
                    <img
                      src="https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fet.png&w=3840&q=85"
                      alt=""
                    />
                  </motion.div>
                </motion.div>
                {/* text */}
                <motion.div className=" bottom-0 overflow-hidden absolute ">
                  <motion.div
                    className="flex flex-col items-center gap-3"
                    initial={{ y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <h1 className="text-2xl font-bold">Emerging Tech</h1>
                    <p className="text-[12px]">Because we are geeks</p>
                  </motion.div>
                </motion.div>
              </>
            )}
          </div>
          {/* 8 */}
          <div
            onMouseEnter={() => {
              setIsMouseInside8(true);
            }}
            onMouseLeave={() => {
              setIsMouseInside8(false);
            }}
            className="sm:w-2/6 h-[500px] cursor-pointer flex flex-col justify-center items-center relative"
          >
            {/* parent div with hover effects */}
            {isMouseInside8 ? (
              <>
                {/* // Final */}
                <motion.div
                  className=" bg-[rgb(136,57,85)] flex flex-col justify-center items-center rounded-full group"
                  animate={{
                    width: "450px", // Adjust the width here
                    height: "450px", // Adjust the height here
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {/* hover text */}
                  <motion.div
                    className="text-white flex flex-col justify-center items-center w-[300px] "
                    animate={{ opacity: 1, y: -40, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-2 mb-10 items-center">
                      <h1 className="font-bold text-[12px]">Coaching</h1>
                      <h1 className="font-bold text-xl">We’d love to share.</h1>
                    </div>
                    <p className="text-[15px]">
                      Attend our Masterclasses with the Codigo syllabus or talk
                      to us to customise sessions just for your business teams.
                      Learn more here
                    </p>
                  </motion.div>
                  {/* image */}
                  <motion.div
                    className=" absolute flex justify-center items-center"
                    animate={{ opacity: 1, y: 220, scale: 0.5 }}
                    exit={{ opacity: 1, y: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <img
                      src="https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fcoach.png&w=3840&q=85"
                      alt=""
                    />
                  </motion.div>
                </motion.div>
                {/* text */}
                <motion.div className=" bottom-0 absolute overflow-hidden">
                  <motion.div
                    className="flex flex-col  justify-center items-center"
                    animate={{ y: -100 }}
                    exit={{ y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <h1 className="text-2xl font-bold">Coaching</h1>
                    <p className="text-[12px]">Come learn our secrets</p>
                  </motion.div>
                </motion.div>
              </>
            ) : (
              <>
                {/* // Initial */}
                <motion.div
                  className=" bg-[rgb(136,57,85)] flex flex-col justify-center items-center rounded-full group"
                  initial={{
                    width: "200px",
                    height: "200px",
                  }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                >
                  {/* hover text */}
                  <motion.div
                    className="text-white flex flex-col justify-center items-center w-[300px] "
                    initial={{ opacity: 0, y: 30, scale: 0.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-2 mb-10 items-center">
                      <h1 className="font-bold text-[12px]">Coaching</h1>
                      <h1 className="font-bold text-xl">We’d love to share.</h1>
                    </div>
                    <p className="text-[15px]">
                      Attend our Masterclasses with the Codigo syllabus or talk
                      to us to customise sessions just for your business teams.
                      Learn more here
                    </p>
                  </motion.div>
                  {/* image */}
                  <motion.div
                    className="  absolute flex justify-center items-center"
                    initial={{ opacity: 1, y: 0, scale: 0.6 }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                  >
                    <img
                      src="https://www.codigo.co/_next/image?url=%2Fimages%2Fservices%2Fcoach.png&w=3840&q=85"
                      alt=""
                    />
                  </motion.div>
                </motion.div>
                {/* text */}
                <motion.div className=" bottom-0 overflow-hidden absolute ">
                  <motion.div
                    className="flex flex-col items-center gap-3"
                    initial={{ y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <h1 className="text-2xl font-bold">Coaching </h1>
                    <p className="text-[12px]">Come learn our secrets</p>
                  </motion.div>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
