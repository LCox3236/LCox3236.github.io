import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
export default function BaseLayout() {
  return (
    <div id="page-container">
      <Navbar />
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/about"} element={<About />} />
        <Route exact path={"/portfolio"} element={<Portfolio />} />
      </Routes>
    </div>
  );
}
