import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./pages/home/home";
// import Inventory from "./pages/inventory/inventory";
import AppNav from "./components/appNav/appNav";
import Footer from "./components/footer/footer";
import Chatbox from "./components/chatbox/chatbox";

import AnimatedRoutes from "./animatedRoutes";

import "./index.css";

import { ReactComponent as Chat1 } from "./assets/icons/chat1.svg";
import { ReactComponent as Chat2 } from "./assets/icons/chat_dots.svg";

function App() {
  ///////////////

  const [showChatbox, setShowChatbox] = useState(false);

  const toggleChatbox = () => {
    setShowChatbox((prevShowChatbox) => !prevShowChatbox);
  };

  return (
    <Router>
      <AppNav />
      <AnimatedRoutes />

      <button className="toggleChat_btn" onClick={toggleChatbox}>
        <Chat1 />
        <Chat2 />
      </button>
      {showChatbox && (
        <Chatbox showChatbox={showChatbox} toggleChatbox={toggleChatbox} />
      )}
    </Router>
  );
}

export default App;
