import React, { useState, useRef, useEffect } from "react";
import Rellax from "rellax";
import "../pages.css";

import "./home.css";

import ReCAPTCHA from "react-google-recaptcha";
// import videoBG from "../../assets/video/HM_HeaderVid2.mp4";
import header_bg from "./assets/header_bg.webp";
import family_img from "../../assets/images/family_grad4.webp";

import HM_logo from "../../assets/images/HM_logo.webp";
import Footer from "../../components/footer/footer";
import chatIcon from "../../assets/icons/chat1.svg";
import GoogleReviews from "../../components/GoogleReviews/GoogleReviews";
import Select from "react-select";
// import { motion } from "framer-motion";

const Home = () => {
  const hiddenElements = useRef(document.querySelectorAll(".hidden"));

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        // console.log(entry.target.classList);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);

          //  if (entry.target.classList.contains("financing_text")) {
          //    console.log("financing_text is intersecting");
          //  }
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    hiddenElements.current = document.querySelectorAll(".hidden");
    hiddenElements.current.forEach((hiddenElement) => {
      observer.observe(hiddenElement);
    });

    // Clean up observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  const locations = [
    "Douglasville GA",
    "Birmingham AL",
    "Montgomery AL",
    "Diberville MS",
  ];

  const [captchaCompleted, setCaptchaCompleted] = useState(false);
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");

  const [formData, setFormData] = useState({
    location: locations[0],
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    agreement: false,
    description: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onChangeCaptcha = (value) => {
    setGeneratedCaptcha(value);
    setCaptchaCompleted(true);
  };

  const handleAgreementChange = (e) => {
    const isChecked = e.target.checked;
    setAgreementChecked(isChecked);
    setFormData({
      ...formData,
      agreement: isChecked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaCompleted) {
      console.log("Please complete the reCAPTCHA");
      return;
    }
    // Handle form submission logic
  };
  // new Rellax(".rellax");
  useEffect(() => {
    const rellaxInstance = new Rellax(".rellax");
    return () => {
      rellaxInstance.destroy(); // Cleanup when the component unmounts
    };
  }, []);

  // useEffect(() => {
  //   // Scroll to the top of the page whenever the component is re-rendered
  //   window.scrollTo(0, 0);
  // });

  return (
    <div className="route_container home_container">
      {/******  GROUP 1 ******/}
      <div className=" section intro_section">
        {/* <img src={header_bg} className="picture_box" /> */}
        <div className=" intro_text  rellax" data-rellax-speed="3">
          {/* <div className="main_home_text"> */}

          <div className="title_box_foreground hidden">
            <h1 className="welcome">Welcome!</h1>
            <h3 className="slogan">There's no place like Holmes!</h3>
          </div>

          <p className="hidden">
            <h3 className="intro_h3">Our Mission</h3>
            &emsp; We are a locally owned <strong>
              lease-here-pay-here
            </strong>{" "}
            car lot, providing top-notch automotive services, serving locations
            in <strong>Douglasville GA</strong>, <strong>Birmingham AL</strong>,{" "}
            <strong>Montgomery AL,</strong> and <strong>Diberville MS</strong>{" "}
            for{" "}
            <u>
              <strong>
                <i style={{ fontSize: "1.3em", lineHeight: "1" }}>
                  over 25 years
                </i>
              </strong>
            </u>
            . At Holmes Motors, we believe that everyone deserves a reliable
            vehicle, <i>regardless</i> of their credit history. <br />
            &emsp; To learn more about our lease-here-pay-here program, click{" "}
            <a href="/about-us">here</a>.
          </p>
          {/* </div> */}
        </div>
      </div>

      {/* transform: translateZ(5px) scale(.4) translateY(-25vh);  */}
      {/******  GROUP 2 ******/}
      <div className=" section form_section ">
        <div className=" form rellax " data-rellax-speed="3">
          <div className="hidden">
            <h2 className="preApprove_title fancyWhite">Apply Now!!</h2>
            <form className="preApproval_form " onSubmit={handleSubmit}>
              <div className="left_col">
                <div className="cell location_cell">
                  <label htmlFor="location">
                    Select Your Preferred Location:
                  </label>
                  <Select
                    className="basic-single"
                    // pointerEvents="active"
                    classNamePrefix="select"
                    defaultValue={{
                      value: formData.location,
                      label: formData.location,
                    }}
                    isDisabled={false}
                    isLoading={false}
                    isClearable={true}
                    isRtl={false}
                    isSearchable={true}
                    name="location"
                    options={locations.map((location, index) => ({
                      value: location,
                      label: location,
                      key: index,
                    }))}
                  />
                </div>
                <div className="cell firstname_cell">
                  <label htmlFor="firstname">First Name:</label>
                  <input
                    className="preApproval_input"
                    onChange={onChange}
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={formData.firstname}
                  />
                </div>
                <div className="cell lastname_cell">
                  <label htmlFor="lastname">Last Name:</label>
                  <input
                    className="preApproval_input"
                    onChange={onChange}
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={formData.lastname}
                  />
                </div>
                <div className="cell email_cell">
                  <label htmlFor="email">Email:</label>
                  <input
                    className="preApproval_input"
                    type="email"
                    name="email"
                    id="email"
                    onChange={onChange}
                    value={formData.email}
                  />
                </div>
                <div className="cell phone_cell">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    className="preApproval_input"
                    type="tel"
                    name="phone"
                    id="phone"
                    onChange={(e) => {
                      // Automatically format input as user types
                      const formattedPhoneNumber = e.target.value
                        .replace(/\D/g, "") // Remove non-digit characters
                        .slice(0, 10) // Limit to 10 digits (standard US phone number)
                        .replace(/(\d{3})(\d{0,3})(\d{0,4})/, "($1) $2-$3"); // Format phone number
                      setFormData({
                        ...formData,
                        phone: formattedPhoneNumber, // Update the state with the formatted phone number
                      });
                    }}
                    value={formData.phone}
                  />
                </div>
              </div>

              <div className="right_col">
                <div className="cell description_cell">
                  <label htmlFor="description">
                    Please describe the vehicle you are interested in:
                  </label>
                  <textarea
                    rows={4}
                    className="preApproval_input"
                    id="description"
                    name="description"
                    placeholder="Your ideal vehicle"
                    value={formData.description}
                    onChange={onChange}
                  />
                </div>
                <div className="checkbox-container cell checkbox_cell">
                  <label className="agmt_label" htmlFor="agreement">
                    <input
                      // className="preApproval_input"
                      type="checkbox"
                      name="agreement"
                      id="agreement"
                      checked={formData.agreement}
                      onChange={handleAgreementChange}
                    />
                    By entering your phone number you agree to be contacted via
                    SMS for information, offers, and advertising. We will NEVER
                    spam you and you can opt-out of our messages at any time.
                    Message & data rates apply. Message frequency varies. I have
                    read and agree to the Terms and Conditions, Consent to
                    Electronic Communications, and the Company Privacy Notice.
                  </label>
                </div>
                <ReCAPTCHA
                  className="cell recaptcha_cell"
                  style={{
                    // border: "1px solid red",
                    padding: "0",
                    height: "60px",
                    overflow: "hidden",
                  }}
                  size="compact"
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onChangeCaptcha}
                />
                <button
                  className="preApproval_submitBtn"
                  type="submit"
                  disabled={!captchaCompleted || !agreementChecked}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/******  GROUP 3 ******/}
      <div className=" section text_section">
        <div className=" para_layer">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laudantium, voluptates.
          </p>
        </div>
      </div>
      {/* <div className=" outro_screen"></div> */}
      <Footer />
    </div>
  );
};

export default Home;
