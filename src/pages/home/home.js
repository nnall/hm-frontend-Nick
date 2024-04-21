import React, { useState } from "react";
import "./home.css";
import ReCAPTCHA from "react-google-recaptcha";
import videoBG from "../../assets/video/HM_HeaderVid2.mp4";
import family_img from "../../assets/images/family_grad4.webp";
import HM_img from "../../assets/images/HM.webp";
import Footer from "../../components/footer/footer";
import chatIcon from "../../assets/icons/chat1.svg";
import GoogleReviews from "../../components/GoogleReviews/GoogleReviews";

import Select from "react-select";

//TRANSITION (framer-motion)
import { motion } from "framer-motion";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home = () => {
  // const homeClass = animation.fadeIn ? "fadeIn" : "";

  const locations = [
    "Douglasville GA",
    "Birmingham AL",
    "Montgomery AL",
    "Diberville MS",
  ];

  //TESTING KEYS (from https://developers.google.com/recaptcha/docs/faq)
  const YOUR_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  // Secret key: 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe

  /* On the server side, you'll need to verify the CAPTCHA response using the reCAPTCHA verification API. This typically involves making a POST request to https://www.google.com/recaptcha/api/siteverify with the response token and your secret key. Google will respond with whether the CAPTCHA was successfully solved by a human or not. */

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

  function onChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const onChangeCaptcha = (value) => {
    console.log("Captcha value:", value);
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

  //send captcha Key to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!", formData);

    if (!captchaCompleted) {
      console.log("Please complete the reCAPTCHA");
      return;
    }

    // Send the reCAPTCHA response token to your backend for verification
    const response = await fetch("http://localhost:3001/verify-recaptcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
      }), // Replace captchaToken with the actual token
    });

    const data = await response.json();

    if (response.ok) {
      // Verification successful
      console.log("reCAPTCHA verified:", data);
      // Now you can proceed with form submission or any other action
    } else {
      // Verification failed
      console.error("reCAPTCHA verification failed:", data);
      // Handle the error, e.g., display an error message to the user
    }
  };

  return (
    <Parallax pages={2} className="home_container">
      {/* Layer with the background video */}
      <ParallaxLayer offset={0} speed={0.8}>
        <header>
          <video
            className="video_background"
            src={videoBG}
            autoPlay
            muted
            loop
          />
          <div className="title_box_foreground">
            <h1>Welcome!</h1>
            <h2>It's like coming home!</h2>
          </div>
        </header>
      </ParallaxLayer>

      {/* Foreground content that moves slightly faster than the background to create depth */}
      {/* <ParallaxLayer offset={0} speed={0.75}> */}

      {/* </ParallaxLayer> */}

      <main>
        {/* TEXT LAYER */}
        <ParallaxLayer
          className="parallax_layer"
          offset={0.35}
          speed={1.2}
          style={{ height: "min-content", border: "2px solid aqua" }}
        >
          <div className="main_home_text">
            <h3>Our Mission</h3>
            <p>
              &emsp; We are a locally owned and operated lease-here-pay-here car
              lot, providing top-notch automotive services, serving locations in{" "}
              <strong>Douglasville GA</strong>, <strong>Birmingham AL</strong>,{" "}
              <strong>Montgomery AL,</strong> and <strong>Diberville MS</strong>{" "}
              for{" "}
              <u>
                <i style={{ fontSize: "1.3em", lineHeight: "1" }}>
                  over 25 years
                </i>
              </u>
              . Our mission is to make your car buying experience as easy and
              stress-free as possible. At Holmes Motors, we believe that
              everyone deserves a reliable vehicle, regardless of their credit
              history. <br />
              &emsp; To learn more about our lease-here-pay-here program, click{" "}
              <a href="/about-us">here</a>.
            </p>
          </div>
        </ParallaxLayer>

        {/* FORM LAYER */}
        <ParallaxLayer
          className="parallax_layer"
          offset={0.9999999999}
          speed={4}
          style={{ border: "2px solid blue" }}
        >
          <div className="main_home_text_2">
            <h2 className="preApprove_title">Get Pre-Approved!</h2>
            <form className="preApproval_form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="location">
                  Select Your Preferred Location:
                </label>
                <Select
                  className="basic-single"
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
                  // onChange={onChange}
                />
              </div>
              <div>
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
              <div>
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
              <div>
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
              <div>
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
              {/* <div className="captcha_container" style={{ maxWidth: "100%" }}> */}
              <ReCAPTCHA
                size="compact"
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChangeCaptcha}
              />
              {/* </div> */}
              <div>
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
              <div className="checkbox-container">
                <label className="agmt_label" htmlFor="agreement">
                  <input
                    // className="preApproval_input"
                    type="checkbox"
                    name="agreement"
                    id="agreement"
                    checked={formData.agreement}
                    onChange={handleAgreementChange}
                  />{" "}
                  &emsp; By entering your phone number you agree to be contacted
                  via SMS for information, offers, and advertising. We will
                  NEVER spam you and you can opt-out of our messages at any
                  time. Message & data rates apply. Message frequency varies. I
                  have read and agree to the Terms and Conditions, Consent to
                  Electronic Communications, and the Company Privacy Notice.
                </label>
              </div>
              <button
                className="preApproval_submitBtn"
                type="submit"
                disabled={!captchaCompleted || !agreementChecked}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </ParallaxLayer>
        {/* IMAGE LAYER */}
        <ParallaxLayer
          className="parallax_layer parallax_layer_img"
          offset={0.99}
          speed={3.25}
          style={{ /* height: "1vh", */ border: "2px solid red" }}
        >
          <img src={family_img} className="main_home_img" alt="family_img" />
        </ParallaxLayer>
      </main>
    </Parallax>
  );
};

// export default Transition(Home);

export default Home;
