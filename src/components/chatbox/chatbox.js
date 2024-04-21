import React, { useState } from "react";
import axios from "axios";
import { ReactComponent as Close1 } from "../../assets/icons/close1.svg";
import { ReactComponent as Close2 } from "../../assets/icons/close2.svg";
import "./chatbox.css";

const Chatbox = ({ showChatbox, toggleChatbox }) => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
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

  const [isHovered, setIsHovered] = useState(false);

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

  return (
    <div className={`chatbox-container ${showChatbox ? "show" : "hide"}`}>
      <div className="chatbox">
        <button
          onClick={handleToggleChatbox}
          className="close_btn"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHovered ? <Close2 /> : <Close1 />}
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
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbox;
