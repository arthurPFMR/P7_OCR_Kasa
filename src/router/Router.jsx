/*
This component is the router of the application,
uses to display all pages.
-3 routes (for each page of website)
-1 route for incorrect path
*/

import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import About from "../pages/About";
import Home from "../pages/Home";
import Rental from "../pages/Rental";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/rental/:id" element={<Rental />} />
    </Routes>
  );
};

export default Router;
