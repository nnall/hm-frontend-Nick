import React, { useState } from "react";
import Select from "react-select";
import ReCAPTCHA from "react-google-recaptcha";

import "./tradeIn.css";

const TradeIn = () => {
  const locations = [
    "Douglasville GA",
    "Birmingham AL",
    "Montgomery AL",
    "Diberville MS",
  ];

  const conditions = ["Extra Clean", "Good", "Average", "Rough"];

  const onChangeCaptcha = (value) => {
    setGeneratedCaptcha(value);
    setCaptchaCompleted(true);
  };

  const [captchaCompleted, setCaptchaCompleted] = useState(false);
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");

  const [formData, setFormData] = useState({
    location: locations[0],
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    year: "",
    make: "",
    model: "",
    trim: "",
    mileage: "",
    exterior_cond: conditions[0],
    interior_cond: conditions[0],
    accident: false,
    original_owner: false,
    sms_agreement: false,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
    <div className="route_container tradeIn_container">
      <h1 className="tradeIn_title">Trade Requests</h1>
      <div className="section tradeForm_section parallax_group">
        <div className="top_parallax_layer form_parallax">
          <form className="tradeIn_form" /* onSubmit={handleSubmit} */>
            <div>
              <label htmlFor="location">Select Your Nearest Location:</label>
              <Select
                className="basic-single"
                pointerEvents="active"
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
                className="tradeIn_input"
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
                className="tradeIn_input"
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
                className="tradeIn_input"
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
                className="tradeIn_input"
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
            <div>
              <label htmlFor="year">Vehicle Year</label>
              <input
                className="tradeIn_input"
                type="number"
                name="year"
                id="year"
                onChange={(e) => {
                  const year = parseInt(e.target.value); // Parse the input value as an integer
                  setFormData({
                    ...formData,
                    year: year || "", // If parsing fails, set it to an empty string
                  });
                }}
                value={formData.year}
              />
            </div>
            <div>
              <label htmlFor="make">Vehicle Make</label>
              <input
                className="tradeIn_input"
                type="text"
                name="make"
                id="make"
                onChange={(e) => {
                  const make = parseInt(e.target.value); // Parse the input value as an integer
                  setFormData({
                    ...formData,
                    make: make || "", // If parsing fails, set it to an empty string
                  });
                }}
                value={formData.make}
              />
            </div>
            <div>
              <label htmlFor="model">Vehicle Model</label>
              <input
                className="tradeIn_input"
                type="text"
                name="model"
                id="model"
                onChange={(e) => {
                  const model = parseInt(e.target.value); // Parse the input value as an integer
                  setFormData({
                    ...formData,
                    model: model || "", // If parsing fails, set it to an empty string
                  });
                }}
                value={formData.model}
              />
            </div>
            <div>
              <label htmlFor="trim">Vehicle Trim</label>
              <input
                className="tradeIn_input"
                type="text"
                name="trim"
                id="trim"
                onChange={(e) => {
                  const trim = parseInt(e.target.value); // Parse the input value as an integer
                  setFormData({
                    ...formData,
                    trim: trim || "", // If parsing fails, set it to an empty string
                  });
                }}
                value={formData.trim}
              />
            </div>
            <div>
              <label htmlFor="mileage">Mileage</label>
              <input
                className="tradeIn_input"
                type="number"
                name="mileage"
                id="mileage"
                onChange={(e) => {
                  const mileage = parseInt(e.target.value); // Parse the input value as an integer
                  setFormData({
                    ...formData,
                    mileage: mileage || "", // If parsing fails, set it to an empty string
                  });
                }}
                value={formData.mileage}
              />
            </div>
            <div>
              <label htmlFor="exterior_cond">Exterior Condition:</label>
              <Select
                className="basic-single"
                // pointerEvents="active"
                classNamePrefix="select"
                defaultValue={{
                  value: formData.exterior_cond,
                  label: formData.exterior_cond,
                }}
                isDisabled={false}
                isLoading={false}
                isClearable={true}
                isRtl={false}
                isSearchable={true}
                name="exterior_cond"
                options={conditions.map((exterior_cond, index) => ({
                  value: exterior_cond,
                  label: exterior_cond,
                  key: index,
                }))}
              />
            </div>
            <div>
              <label htmlFor="interior_cond">Interior Condition:</label>
              <Select
                className="basic-single"
                // pointerEvents="active"
                classNamePrefix="select"
                defaultValue={{
                  value: formData.interior_cond,
                  label: formData.interior_cond,
                }}
                isDisabled={false}
                isLoading={false}
                isClearable={true}
                isRtl={false}
                isSearchable={true}
                name="interior_cond"
                options={conditions.map((interior_cond, index) => ({
                  value: interior_cond,
                  label: interior_cond,
                  key: index,
                }))}
              />
            </div>
            <div>
              <label htmlFor="accident">
                Has this vehicle ever been involved in an accident?
              </label>
              <input
                className="tradeIn_input"
                type="checkbox"
                name="accident"
                id="accident"
                onChange={(e) => {
                  const accident = parseInt(e.target.value); // Parse the input value as an integer
                  setFormData({
                    ...formData,
                    accident: accident || "", // If parsing fails, set it to an empty string
                  });
                }}
                value={formData.accident}
              />
            </div>
            <div>
              <label htmlFor="original_owner">
                Are you the original owner?
              </label>
              <input
                className="tradeIn_input"
                type="checkbox"
                name="original_owner"
                id="original_owner"
                onChange={(e) => {
                  const original_owner = parseInt(e.target.value); // Parse the input value as an integer
                  setFormData({
                    ...formData,
                    original_owner: original_owner || "", // If parsing fails, set it to an empty string
                  });
                }}
                value={formData.original_owner}
              />
            </div>
            <div>
              <label className="sms_label" htmlFor="sms_agreement">
                <input
                  // className="tradeIn_input"
                  type="checkbox"
                  name="sms_agreement"
                  id="sms_agreement"
                  checked={formData.sms_agreement}
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

            <button
              className="tradeIn_submitBtn"
              type="submit"
              disabled={!captchaCompleted || !agreementChecked}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TradeIn;
