import React, { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./home.css";
import "./parallax.css";

import ReCAPTCHA from "react-google-recaptcha";
import videoBG from "../../assets/video/HM_HeaderVid2.mp4";
import family_img from "../../assets/images/family_grad4.webp";
import HM_img from "../../assets/images/HM_multi.webp";
import HM_logo from "../../assets/images/HM_logo.webp";
import Footer from "../../components/footer/footer";
import chatIcon from "../../assets/icons/chat1.svg";
import GoogleReviews from "../../components/GoogleReviews/GoogleReviews";
import Select from "react-select";
import { motion } from "framer-motion";

const Home = () => {
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

  return (
    <div className=" home_container parallax_wrapper">
      {/******  GROUP 1 ******/}
      <div
        className="parallax_group intro_group centering"
        id="parallax_group_1"
      >
        <div className="parallax_layer base_layer header">
          <header>
            <video
              className="video_background"
              src={videoBG}
              autoPlay
              muted
              loop
            />

            <div className="title_box_foreground">
              <img
                src={HM_img}
                className="main_home_logo"
                alt="holmes_motors_logo"
              />
              <h1>Welcome!</h1>
              <h2>&emsp; There's no place like Holmes!</h2>
            </div>
          </header>
        </div>
        <div className="parallax_layer top_layer text1">
          <div className="main_home_text">
            <h3>Our Mission</h3>
            <p>
              &emsp; We are a locally owned lease-here-pay-here car lot,
              providing top-notch automotive services, serving locations in{" "}
              <strong>Douglasville GA</strong>, <strong>Birmingham AL</strong>,{" "}
              <strong>Montgomery AL,</strong> and <strong>Diberville MS</strong>{" "}
              for{" "}
              <u>
                <i style={{ fontSize: "1.3em", lineHeight: "1" }}>
                  over 25 years
                </i>
              </u>
              . At Holmes Motors, we believe that everyone deserves a reliable
              vehicle, regardless of their credit history. <br />
              &emsp; To learn more about our lease-here-pay-here program, click{" "}
              <a href="/about-us">here</a>.
            </p>
          </div>
        </div>
      </div>

      {/* transform: translateZ(5px) scale(.4) translateY(-25vh);  */}
      {/******  GROUP 2 ******/}
      <div
        className="parallax_group form_group centering "
        id="parallax_group_2"
      >
        <div className="parallax_layer base_layer bg_img centering">
          {/* <img src={family_img} className="main_home_img" alt="family_img" /> */}
        </div>

        <div className="parallax_layer top_layer main_home_text_2  form">
          <h2 className="preApprove_title">Apply Now!!</h2>
          <form className="preApproval_form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="location">Select Your Preferred Location:</label>
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
            <ReCAPTCHA
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
                via SMS for information, offers, and advertising. We will NEVER
                spam you and you can opt-out of our messages at any time.
                Message & data rates apply. Message frequency varies. I have
                read and agree to the Terms and Conditions, Consent to
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
      </div>
      {/******  GROUP 3 ******/}
      <div className="parallax_group text_group">
        <div className="parallax_layer base_layer logo_img"></div>
        <div className="parallax_layer top_layer para_layer">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laudantium, voluptates.
          </p>
        </div>
      </div>
      {/* <div className="parallax_group outro_screen"></div> */}
      <Footer />
    </div>
  );
};

export default Home;
