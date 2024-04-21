import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/images/HM_logo.webp";
import { Link, useNavigate, useLocation } from "react-router-dom";
import MenuBtn from "../menuButton/menuButton";
import "../menuButton/menuBtn.css";
import "./appNav.css";

const AppNav = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const linksRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.scrollTo(0, 0);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (linksRef.current && !linksRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {screenWidth <= 1080 ? (
        <div
          style={{
            // right: "0",
            width: "100%",
            overflow: "hidden",
            position: "absolute",
            pointerEvents: "auto",
            zIndex: "5",
            // border: "2px solid red",
          }}
        >
          <nav>
            <img
              className="logo_nav"
              src={logo}
              alt="Home"
              onClick={() => navigate("/")}
            />
            <MenuBtn
              // onclick={toggleMenu}
              toggleMenu={toggleMenu}
              className="menu-toggler"
              isMenuOpen={isMenuOpen}
            />
          </nav>
          <div className={`links ${isMenuOpen ? "open" : ""}`}>
            <Link
              className="btn_nav  home_link link"
              onClick={toggleMenu}
              to="/"
            >
              Home
            </Link>
            <Link
              className="btn_nav inventory_link link"
              onClick={toggleMenu}
              to="/inventory"
            >
              Inventory
            </Link>
            <Link
              className="btn_nav link"
              onClick={toggleMenu}
              to="/contact-us"
            >
              Contact Us
            </Link>
            <Link className="btn_nav link" onClick={toggleMenu} to="/about-us">
              About Us
            </Link>
            <Link
              className="btn_nav link"
              onClick={toggleMenu}
              to="/service-request"
            >
              Service Requests
            </Link>
            <Link className="btn_nav link" onClick={toggleMenu} to="/trade-in">
              Trade Inquiry
            </Link>
          </div>

          {/* <div
            className={`overlay ${!isMenuOpen ? "closed" : ""}`}
            onClick={toggleMenu}
          ></div>  */}

          <div
            className={`overlay ${isMenuOpen ? "closed" : "open"}`}
            onClick={toggleMenu}
          ></div>
        </div>
      ) : (
        <nav>
          <img
            className="logo_nav"
            src={logo}
            alt="Home"
            onClick={() => navigate("/")}
          />
          <Link className="btn_nav home_link link" to="/inventory">
            Inventory
          </Link>
          <Link className="btn_nav inventory_link link" to="/contact-us">
            Contact Us
          </Link>
          <Link className="btn_nav link" to="/about-us">
            About Us
          </Link>
          <Link className="btn_nav link" to="/service-request">
            Service Requests
          </Link>
          <Link className="btn_nav link" to="/trade-in">
            Trade Inquiry
          </Link>
        </nav>
      )}
    </>
  );
};

export default AppNav;
