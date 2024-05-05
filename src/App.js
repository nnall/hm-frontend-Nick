import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
//PAGES
import Home from "./pages/home/home";
import Inventory from "./pages/inventory/inventory";
import AboutUs from "./pages/aboutUs/aboutUs";
import AppNav from "./components/appNav/appNav";

//components on ALL PAGES
import Footer from "./components/footer/footer";
import Chatbox from "./components/chatbox/chatbox";

import AnimatedRoutes from "./animatedRoutes";

import "./index.css";

import HM_img from "./assets/images/HM_multi.webp";

import { ReactComponent as Chat1 } from "./assets/icons/chat1.svg";
import { ReactComponent as Chat2 } from "./assets/icons/chat_dots.svg";

function App() {
  ///////////////

  const [showChatbox, setShowChatbox] = useState(false);
  const [displayNone, setDisplayNone] = useState(true);
  const [previouslyShown, setPreviouslyShown] = useState(false);

  const toggleChatbox = () => {
    if (previouslyShown && showChatbox) {
      setShowChatbox(false);
    } else if (showChatbox === false) {
      setPreviouslyShown(true);
      setShowChatbox(true);
    }
  };

  return (
    <Router>
      {/* <img src={HM_img} className="main_home_logo" alt="holmes_motors_logo" /> */}
      <AppNav />
      {/* <AnimatedRoutes /> */}
      <Routes /* location={location} */ /* key={location.pathname} */>
        <Route /* index */ path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

      <button className="toggleChat_btn" onClick={toggleChatbox}>
        <Chat1 />
        <Chat2 />
      </button>

      <Chatbox
        className={showChatbox ? "chatbox-container show" : ""}
        showChatbox={showChatbox}
        previouslyShown={previouslyShown}
        toggleChatbox={toggleChatbox}
        displayNone={displayNone}
      />
    </Router>
  );
}

export default App;
