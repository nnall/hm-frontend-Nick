import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./pages/home/home";
import Inventory from "./pages/inventory/inventory";
import AppNav from "./components/appNav/appNav";
import Footer from "./components/footer/footer";
import Chatbox from "./components/chatbox/chatbox";

import AnimatedRoutes from "./animatedRoutes";

import "./index.css";

import { ReactComponent as Chat1 } from "./assets/icons/chat1.svg";
import { ReactComponent as Chat2 } from "./assets/icons/chat_dots.svg";

// import Transition from "./animatedRoutes";
import { AnimatePresence } from "framer-motion";
// import AnimatedRoutes from "./animatedRoutes";

function App() {
  ///////////////

  const [showChatbox, setShowChatbox] = useState(false);

  const toggleChatbox = () => {
    setShowChatbox((prevShowChatbox) => !prevShowChatbox);
  };

  return (
    // <AnimatePresence>
    <Router>
      {/* <AppNav /> */}
      <AnimatedRoutes />
      {/* <Routes>  //relocated to  animatedRoutes.js
          <Route index path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes> */}
      <button className="toggleChat_btn" onClick={toggleChatbox}>
        <Chat1 />
        <Chat2 />
      </button>
      {showChatbox && (
        <Chatbox showChatbox={showChatbox} toggleChatbox={toggleChatbox} />
      )}
    </Router>
    // </AnimatePresence>
  );
}

export default App;
