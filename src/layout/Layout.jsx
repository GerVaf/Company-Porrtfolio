import React, { useState } from "react";
import Foot from "./Foot";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [active, isActive] = useState(false);
  return (

    <div className=' max-w-[100vw] overflow-hidden'>
      <Nav active={active} isActive={isActive} />
      <div className={`bg-white ${active ? "hidden" : "block"}`}>
        <Outlet />
      </div>
      <div className={`${active ? "hidden" : "block"}`}>
        {" "}
        <Foot />
      </div>
    </div>
  );
};

export default Layout;
