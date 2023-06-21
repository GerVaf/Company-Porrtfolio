import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Nav.css";

const Nav = () => {
  const links = [
    { path: "/work", text: "Work" },
    { path: "/solutions", text: "Solutions" },
    { path: "/services", text: "Services" },
    { path: "/aboutus", text: "About Us" },
  ];

  const [mouseInside, setMouseInside] = useState(
    Array(links.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    const updatedMouseInside = [...mouseInside];
    updatedMouseInside[index] = true;
    setMouseInside(updatedMouseInside);
  };

  const handleMouseLeave = (index) => {
    const updatedMouseInside = [...mouseInside];
    updatedMouseInside[index] = false;
    setMouseInside(updatedMouseInside);
  };

  return (
    <div className="text-white flex items-center px-5 sm:px-10 h-20 sm:py-5 sm:items-end justify-between">
      {/* logo don't extract it cuz it's so fucking long */}
      <NavLink to={"/"}>
        <div className=" w-48">
          <svg viewBox="0 0 127 16">
            <path
              d="M48.0131 15.6784C48.1943 15.8595 48.4401 15.9613 48.6963 15.9613V15.9227C50.8078 15.9227 52.8328 15.0839 54.3259 13.5909C55.8189 12.0978 56.6577 10.0728 56.6577 7.96135C56.6577 5.84987 55.8189 3.82486 54.3259 2.33182C52.8328 0.83878 50.8078 0 48.6963 0C48.4401 0 48.1943 0.101793 48.0131 0.282988C47.8319 0.464182 47.7302 0.709935 47.7302 0.966183C47.7302 1.22243 47.8319 1.46818 48.0131 1.64938C48.1943 1.83057 48.4401 1.93237 48.6963 1.93237C50.3004 1.93237 51.8389 2.5696 52.9731 3.70387C54.1074 4.83815 54.7446 6.37656 54.7446 7.98068C54.7446 9.58479 54.1074 11.1232 52.9731 12.2575C51.8389 13.3917 50.3004 14.029 48.6963 14.029C48.4401 14.029 48.1943 14.1308 48.0131 14.312C47.8319 14.4932 47.7302 14.7389 47.7302 14.9952C47.7302 15.2514 47.8319 15.4972 48.0131 15.6784ZM69.9835 15.6784C70.1647 15.8596 70.4105 15.9613 70.6667 15.9613C70.7943 15.964 70.9211 15.9408 71.0396 15.8932C71.158 15.8455 71.2655 15.7745 71.3558 15.6842C71.446 15.594 71.5171 15.4864 71.5647 15.368C71.6123 15.2496 71.6355 15.1228 71.6329 14.9952V1.00483C71.6329 0.748587 71.5311 0.502833 71.3499 0.321639C71.1687 0.140444 70.923 0.0386511 70.6667 0.0386511C70.4105 0.0386511 70.1647 0.140444 69.9835 0.321639C69.8023 0.502833 69.7005 0.748587 69.7005 1.00483V14.9952C69.7005 15.2514 69.8023 15.4972 69.9835 15.6784ZM119.073 15.9613C117.496 15.9728 115.951 15.5157 114.634 14.6479C113.317 13.7801 112.288 12.5407 111.676 11.087C111.065 9.63335 110.899 8.0308 111.199 6.48265C111.5 4.9345 112.253 3.51051 113.365 2.39129C114.476 1.27207 115.894 0.508042 117.44 0.196124C118.986 -0.115795 120.59 0.0384426 122.048 0.639277C123.506 1.24011 124.753 2.26047 125.63 3.57093C126.507 4.8814 126.976 6.42292 126.976 7.99999C126.971 10.0999 126.139 12.1133 124.659 13.6036C123.18 15.0939 121.172 15.941 119.073 15.9613ZM119.073 1.95168C117.873 1.93635 116.696 2.27801 115.692 2.93322C114.687 3.58843 113.9 4.52759 113.43 5.63134C112.96 6.73508 112.829 7.95356 113.054 9.13186C113.278 10.3102 113.848 11.3951 114.691 12.2487C115.534 13.1023 116.611 13.6861 117.787 13.9258C118.962 14.1655 120.182 14.0503 121.292 13.5949C122.401 13.1395 123.351 12.3644 124.019 11.3681C124.687 10.3719 125.043 9.1995 125.044 7.99999C125.059 6.39917 124.439 4.85751 123.32 3.7129C122.201 2.56829 120.673 1.9141 119.073 1.89371V1.95168ZM86.9888 13.6295C88.4818 15.1226 90.5068 15.9613 92.6183 15.9613C94.7249 15.9563 96.744 15.1185 98.2354 13.6307C99.7268 12.143 100.569 10.1259 100.58 8.01932C100.58 7.76639 100.481 7.52352 100.304 7.34287C100.126 7.16222 99.8857 7.0582 99.6328 7.05314H96.8308C96.5746 7.05314 96.3288 7.15494 96.1477 7.33613C95.9665 7.51733 95.8647 7.76307 95.8647 8.01932C95.8646 8.14531 95.8898 8.27004 95.9385 8.38619C95.9873 8.50235 96.0588 8.6076 96.1488 8.69578C96.2388 8.78396 96.3454 8.8533 96.4626 8.89973C96.5797 8.94616 96.7049 8.96875 96.8308 8.96618H98.5893C98.4083 10.1078 97.904 11.1737 97.1361 12.0376C96.3681 12.9016 95.3687 13.5273 94.2562 13.8409C93.1436 14.1544 91.9645 14.1426 90.8584 13.8068C89.7524 13.471 88.7657 12.8252 88.0153 11.9461C87.2648 11.0669 86.782 9.99112 86.624 8.84607C86.466 7.70102 86.6395 6.53468 87.1238 5.48513C87.6081 4.43559 88.383 3.5468 89.3568 2.92401C90.3305 2.30121 91.4624 1.9705 92.6183 1.97102C92.8745 1.97102 93.1203 1.86922 93.3015 1.68803C93.4827 1.50684 93.5845 1.26108 93.5845 1.00483C93.5845 0.748587 93.4827 0.502833 93.3015 0.321639C93.1203 0.140444 92.8745 0.0386511 92.6183 0.0386511C90.5068 0.0386511 88.4818 0.877431 86.9888 2.37047C85.4957 3.86352 84.6569 5.88852 84.6569 8C84.6569 10.1115 85.4957 12.1365 86.9888 13.6295ZM7.96134 15.9614C5.84986 15.9614 3.82486 15.1226 2.33182 13.6295C0.838779 12.1365 0 10.1115 0 8C0 5.88852 0.838779 3.86352 2.33182 2.37047C3.82486 0.877431 5.84986 0.0386511 7.96134 0.0386511C8.21759 0.0386511 8.46335 0.140444 8.64454 0.321639C8.82573 0.502834 8.92753 0.748587 8.92753 1.00483C8.92753 1.26108 8.82573 1.50684 8.64454 1.68803C8.46335 1.86922 8.21759 1.97102 7.96134 1.97102C6.35723 1.97102 4.81883 2.60825 3.68455 3.74253C2.55027 4.8768 1.91304 6.41521 1.91304 8.01932C1.91304 9.62343 2.55027 11.1618 3.68455 12.2961C4.81883 13.4304 6.35723 14.0676 7.96134 14.0676C8.21759 14.0676 8.46335 14.1694 8.64454 14.3506C8.82573 14.5318 8.92753 14.7776 8.92753 15.0338C8.92753 15.2901 8.82573 15.5358 8.64454 15.717C8.46335 15.8982 8.21759 16 7.96134 16V15.9614ZM23.7701 14.6196C25.0794 15.4944 26.6186 15.9614 28.1932 15.9614C30.3031 15.9563 32.3252 15.1158 33.8171 13.6239C35.3091 12.132 36.1495 10.1099 36.1546 8.00001C36.1546 6.4254 35.6877 4.88616 34.8129 3.57692C33.938 2.26768 32.6947 1.24725 31.2399 0.644676C29.7852 0.0421 28.1844 -0.11556 26.64 0.19163C25.0957 0.49882 23.6771 1.25707 22.5637 2.37048C21.4503 3.4839 20.692 4.90247 20.3849 6.44683C20.0777 7.99118 20.2353 9.59194 20.8379 11.0467C21.4405 12.5014 22.4609 13.7448 23.7701 14.6196ZM24.8277 2.96162C25.8249 2.29935 26.9962 1.94787 28.1932 1.9517V1.89373C28.9908 1.89624 29.78 2.05647 30.5153 2.36518C31.2507 2.67389 31.9178 3.125 32.4781 3.69253C33.0385 4.26007 33.4811 4.93283 33.7804 5.67208C34.0797 6.41134 34.2299 7.20249 34.2222 8.00001C34.2222 9.19707 33.867 10.3672 33.2015 11.3623C32.5361 12.3573 31.5903 13.1325 30.484 13.5897C29.3777 14.047 28.1606 14.1656 26.9868 13.9306C25.813 13.6957 24.7354 13.1177 23.8903 12.2699C23.0452 11.4221 22.4707 10.3426 22.2395 9.16809C22.0083 7.99356 22.1308 6.77684 22.5916 5.672C23.0523 4.56716 23.8305 3.62388 24.8277 2.96162Z"
              fill="#FFF"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </NavLink>
      {/* link cate  for Desktop*/}
      <div className="text-md hidden sm:flex sm:gap-20 h-10 font-mono">
        {links.map((link, index) => (
          <NavLink to={link.path} key={index}>
            <div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="flex flex-col overflow-hidden"
            >
              {link.text}
              {mouseInside[index] ? (
                <motion.hr
                  initial={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="border w-11"
                />
              ) : (
                <motion.hr
                  animate={{ x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="border w-11"
                />
              )}
            </div>
          </NavLink>
        ))}
      </div>
      {/* link cate for mobile  */}
      
    </div>
  );
};

export default Nav;
