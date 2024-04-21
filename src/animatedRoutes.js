import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/home/home";
import Inventory from "./pages/inventory/inventory";

import { AnimatePresence } from "framer-motion";

// import {} from "framer-motion/dist/framer-motion"

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    // <AnimatePresence>
    <>
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </>
    // </AnimatePresence>
  );
};

export default AnimatedRoutes;
