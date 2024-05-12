import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Rellax from "rellax";
import Footer from "../../components/footer/footer";
import "../pages.css";
import "./store.css";
import normalizeFilter from "../../components/normalizeFilter";

//ICONS
/* browser icon */
import fb_logo from "../../components/footer/footer_icons/facebook.svg";
import insta_logo from "../../components/footer/footer_icons/instagram.svg";
import home_icon from "../../components/footer/footer_icons/home_icon.svg";
import phone_icon from "../../components/footer/footer_icons/phone.svg";

//temporary image import
import headerBG from "./assets/images/dealership_header_bg.webp";
import intro_pic from "./assets/images/store_intro_pic.webp";

//COMPONENTS
import InventoryCarousel from "../../components/inventoryCarousel/inventoryCarousel";

const Store = ({ storeInv, storeData }) => {
  const [inventoryAll, setInventoryAll] = useState(null); //using 'storeInv'
  const [normalizedInventory, setNormalizedInventory] = useState(null); //using 'storeInv'
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch(
          "https://dev-react.holmesmotors.com/api/holmes/inventory"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setInventoryAll(data);
        setNormalizedInventory(normalizeFilter(data, storeInv));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInventory();
  }, []);

  //normalizeFilter formats it, filters it, and returns only this location records

  console.log(inventoryAll);

  console.log("normalized data", normalizedInventory);

  useEffect(() => {
    const rellaxInstance = new Rellax(".rellax");
    return () => {
      rellaxInstance.destroy(); // Cleanup when the component unmounts
    };
  }, []);

  return (
    <div className="route_container store_container">
      <div className="section page_section">
        {/* elements in here can have .rellax class + data-rellax-speed = "" for effect */}
        <header
          style={{
            backgroundImage: `url(${headerBG})`,
          }}
        ></header>
        <main className="main rellax" data-rellax-speed="2">
          <h2 className="intro_blurb_title fancyYellow">
            Discover {storeData.location}!
          </h2>
          <div className="intro_blurb_container " /* data-rellax-speed="1" */>
            <img
              className="store_intro_pic"
              src={intro_pic}
              alt="introduction_picture"
            />{" "}
            <p className="blurb">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{storeData.intro_blurb.para1}
            </p>
            <br />
            <p className="blurb">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{storeData.intro_blurb.para2}
            </p>
            <br />
            <p className="blurb">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{storeData.intro_blurb.para3}
            </p>
            <br />
            {/* <p className="blurb">{storeData.intro_blurb}</p> */}
          </div>
          <div className="contacts_container " /* data-rellax-speed="1" */>
            <h3 className="quickLinks_title">Quick Links</h3>
            <div className="socialMedia_box">
              <span className="web_span">
                <img
                  className="footer_icon quickLink_img"
                  src={fb_logo}
                  alt="fb_logo"
                />{" "}
                <a className="store_link_text " href={storeData.fb_link}>
                  Facebook
                </a>
              </span>
              <span className="web_span">
                <img
                  className="footer_icon quickLink_img"
                  src={insta_logo}
                  alt="insta_logo"
                />{" "}
                <a className="store_link_text " href={storeData.insta_link}>
                  {" "}
                  {/* fix this */}
                  Instagram
                </a>
              </span>
            </div>

            <div className="contact_hours_box">
              <h4 className="label address_label">Address</h4>
              <p className=" web_span">
                <img
                  className="footer_icon quickLink_img"
                  src={home_icon}
                  alt="home_icon"
                />{" "}
                <span className="store_link_text">{storeData.address}</span>
              </p>
              <h4 className="label phone_label">Phone</h4>
              <p className="web_span">
                {" "}
                <img
                  className="footer_icon quickLink_img"
                  src={phone_icon}
                  alt="phone_icon"
                />
                <span className="store_link_text">{storeData.phone}</span>
              </p>

              {/* create a function  to map over store. allContacts.storeHours and output .hours_table*/}
              <h4 className="label hours_label">Hours</h4>

              <div className="hours_table">
                {/* Map over storeData.hours */}
                {Object.entries(storeData.hours).map(([day, hours]) => (
                  <div
                    key={day}
                    className={`hours_row ${day.toLowerCase()}_row`}
                  >
                    <div className={`day_col ${day.toLowerCase()}_col`}>
                      {day}
                    </div>
                    <div className="hours_col">{hours}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="googleReviews_container">
              {/* google reviews api component */}
            </div>
          </div>
          {normalizedInventory ? (
            <InventoryCarousel vehicles={normalizedInventory} />
          ) : (
            <div
              style={{
                border: "1px solid black",
                gridColumn: "1 / span 2",
                gridRow: "3",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "15rem",
              }}
            >
              <h3>Loading...</h3>
            </div>
          )}
          {/* <InventoryCarousel vehicles={filteredData} /> */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Store;
