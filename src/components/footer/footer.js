import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import HM_logo from "../../assets/images/HM_black.webp";
import fb_logo from "./footer_icons/facebook.svg";
import insta_logo from "./footer_icons/instagram.svg";
import home_icon from "./footer_icons/home_icon.svg";
import locations_icon from "./footer_icons/location_icon.svg";
import phone_icon from "./footer_icons/phone.svg";
import email_icon from "./footer_icons/email.svg";
import terms_icon from "./footer_icons/terms.svg";
import privacy_icon from "./footer_icons/privacy.svg";

const Footer = () => {
  return (
    <footer>
      {/************* FOOTER LEFT *************/}
      <div className="footer_left">
        <div className="logo_box">
          <img className="hm_logo" src={HM_logo} alt="HolmesMotors_logo" />
          <h2>Holmes Motors</h2>
        </div>
        <p>
          Terms for financing in the state of Georgia differ from financing
          terms and requirements for Alabama, Louisiana, and Mississippi
          customers. This advertisement is for a lease. A sample lease for a
          2016 Nissan Sentra is $1,600.00 due at lease signing and $195.00
          bi-weekly for 30 months. This includes security deposit. No early
          termination fee. All lease payments, terms, and credit qualifications
          are subject to change without notice or obligation. Not all lessees
          will qualify. Additional lease terms and options may be available.
          Georgia Customers, Downpayment plus TAVT due at the time of sale.
        </p>
        <p>© 2024 Holmes Motors. All Rights Reserved.</p>
        <div className="connect_box">
          <h3 className="connect">Connect!</h3>
          <div className="connect_box_links">
            <a href="" className="footer_link">
              <img
                src={fb_logo}
                className="footer_icon socialMedia_icon"
                alt="facebook"
              />
            </a>
            <a href="" className="footer_link instagram_link">
              <img
                src={insta_logo}
                className="footer_icon socialMedia_icon"
                alt="instagram"
              />
            </a>
          </div>
        </div>
      </div>
      {/************* FOOTER RIGHT *************/}
      <div className="footer_right">
        {/* QUICK LINKS */}
        <div className="quickLink_box">
          <h3>Quick Links</h3>
          <ul className="quickLink_list">
            <li>
              <a href="/" className="footer_link footer_quickLinks">
                <img
                  className="footer_icon quickLink_img"
                  src={home_icon}
                  alt="home_icon"
                />
                Home
              </a>
            </li>
            {/* <li>
              <a
                className="footer_link footer_quickLinks"
                href="https://maps.app.goo.gl/1LFzqhHTRoqRSjaZ8"
                target="_blank"
                class="button"
              >
                <img
                  className="footer_icon quickLink_img"
                  src={locations_icon}
                  alt="locations icon"
                />
                Locations
              </a>
            </li> */}
            <li>
              <a
                className="footer_link footer_quickLinks"
                href="https://maps.app.goo.gl/1LFzqhHTRoqRSjaZ8"
                target="_blank"
              >
                <img
                  className="footer_icon quickLink_img"
                  src={locations_icon}
                  alt="locations_icon"
                />
                Locations
              </a>
            </li>
            <li>
              <a
                href="/terms-of-service"
                className="footer_link footer_quickLinks"
              >
                <img
                  className="footer_icon quickLink_img"
                  src={terms_icon}
                  alt="terms_icon"
                />
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="footer_link footer_quickLinks"
              >
                <img
                  className="footer_icon quickLink_img"
                  src={privacy_icon}
                  alt="privacy_icon"
                />
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        {/* CONTACT BOX */}
        <div className="contact_box">
          <h3>Contact</h3>

          <div className="contactBox_links">
            <a className="footer_link" href="tel:+18448207433">
              <img
                className="contact_img footer_icon phone_img"
                src={phone_icon}
                alt="locations icon"
              />
              844-820-RIDE
            </a>

            <a className="footer_link" href="mailto:info@gowithgigcar.com">
              <img
                className="contact_img footer_icon"
                src={email_icon}
                alt="email icon"
              />
              sales@holmesmotors.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
