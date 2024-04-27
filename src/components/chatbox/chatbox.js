import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { ReactComponent as Close1 } from "../../assets/icons/close1.svg";
import { ReactComponent as Close2 } from "../../assets/icons/close2.svg";
import "./chatbox.css";

const Chatbox = ({ showChatbox, toggleChatbox }) => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const chatboxRef = useRef(null);
  const scrollToBottom = () => {
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  };
  //leave it out completely and just rewrite it here changing the received 'showChatbox;

  const handleToggleChatbox = () => {
    toggleChatbox();
  };

  const getCurrentTime = () => {
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    return now.toLocaleTimeString([], options);
  };

  const sendMessage = async () => {
    try {
      /* Calling my server (port 3001)'s "/api" route */
      const response = await axios.post("http://localhost:3001/api", {
        message,
      }); // Adjust the URL accordingly
      const responseData = response.data.message;
      const currentTime = getCurrentTime(); // Get the current timestamp
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { text: message, fromUser: true, timestamp: currentTime },
        { text: responseData, fromUser: false, timestamp: currentTime },
      ]);
      setMessage(""); // Clear the input field after sending message
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // Exit button, or other
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  // const handleInputChange = (e) => {
  //   setMessage(e.target.value);
  //   setIsTyping(!!e.target.value); // Set isTyping to true if input has content
  // };

  return (
    // <div className={`chatbox-container ${showChatbox ? "show" : "hide"}`}>
    <div
      className={`chatbox-container ${showChatbox ? "show" : "hide"} ${
        isFocused ? "focused_container" : ""
      }`}
    >
      <div className="chatbox" ref={chatboxRef}>
        <button
          onClick={handleToggleChatbox}
          className="close_btn"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Close2 />
        </button>
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={chat.fromUser ? "user-message" : "response-message"}
          >
            {chat.text}
            <span className="timestamp">{chat.timestamp}</span>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          // autofocus
          type="text"
          value={message}
          // style={{ cursor: "wait" }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder={isTyping ? "" : "Type your message..."}
        />
        {/* <i></i> */}
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbox;
