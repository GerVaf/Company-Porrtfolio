import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Work from "./pages/Work";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
