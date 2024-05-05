import React from "react";

import "./parallax_AU.css";
import "./aboutUs.css";
import Footer from "../../components/footer/footer";
import "../../index.css";
// IMAGES
// import dealership_img from "./assets/dealershipFront.webp";
import dealership_img2 from "./assets/dealership.webp";

////// ICONS

//PLANS ICONS
import { ReactComponent as CPDark } from "./assets/icons/clipboard-dark.svg";
import { ReactComponent as FlagDark } from "./assets/icons/flag-gear-dark.svg";
import { ReactComponent as PlusIcon } from "./assets/icons/plusIcon.svg";

//LOCATIONS ICONS
import { ReactComponent as Web } from "./assets/icons/web_icon.svg"; /* browser icon */
import fb_logo from "../../components/footer/footer_icons/facebook.svg";
import insta_logo from "../../components/footer/footer_icons/instagram.svg";
import home_icon from "../../components/footer/footer_icons/home_icon.svg";
import phone_icon from "../../components/footer/footer_icons/phone.svg";

//make it so that all .top_parallax_layer elements have the same parallax effect (transform: translateZ & Y, scale() settings), same for the .base_parallax_layer elements

const AboutUs = () => {
  return (
    <div className="aboutUs_container parallax_wrapper">
      <div className="section title_section parallax_group">
        <div className="top_parallax_layer title_text">
          <div className="title_box ">
            <h1 className="aboutUs_title">About Us</h1>
            <h3 className="aboutUs_subtitle">Where we began..</h3>
          </div>
          <p className="aboutUs_historyPara">
            &emsp;Welcome to Holmes Motors, where our story began with a simple
            vision and a deep-rooted commitment to our community. It all started
            back in 1972 when we opened our doors on Pass Road in Biloxi,
            Mississippi. From those humble beginnings, we've grown to become a
            cherished part of the landscape, expanding to four locations across
            the South – D'Iberville, Douglasville, Montgomery, and Birmingham.
            Through every milestone, one thing has remained constant – our
            unwavering dedication to treating our customers like family. <br />
            &emsp;At Holmes Motors, we understand that life doesn't always
            follow a perfect credit score. That's why we offer in-house
            financing options, because we believe everyone deserves a chance to
            drive the car of their dreams. By providing no-credit financing,
            we're not just serving our customers – we're serving our home, our
            community, and the bright future we're building together. <br />
            &emsp;As we look ahead, we're excited for the journey that lies
            ahead. With each passing year, our connection to our customers grows
            stronger, fueling our optimism for the road ahead. Whether you're a
            longtime friend or a new face, we invite you to experience the
            Holmes Motors difference – where you're not just a customer, you're
            part of the family.
          </p>
        </div>
      </div>
      <div className="section financing_section parallax_group">
        <div className="financing_text top_parallax_layer ">
          <h2 className="financing_title">
            Financing Made <i>EASY!</i>
          </h2>
          <div className="options_container">
            <div className="option_container integrity_container">
              <div className="icon_box">
                <CPDark className="icon clipboard clipboardDark" />
                <FlagDark className="icon flag flagDark" />
              </div>
              <h3 className="plan_title">Integrity Plan</h3>
              <p className="financing_para integrity_para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore voluptatibus neque quas modi excepturi eveniet impedit
                quam sit optio corrupti! Labore dolorum maiores similique
                ratione magni expedita deleniti itaque pariatur quia veritatis
                exercitationem obcaecati consectetur, temporibus eos aliquid
                doloribus ea autem alias iste? Nulla quis, at explicabo nisi
                beatae harum!
              </p>
            </div>
            <div className="option_container integrityPlus_container">
              <div className="icon_box">
                <CPDark className="icon clipboard clipboardDark" />
                <FlagDark className="icon flag flagDark" />
                <PlusIcon className="icon plusIcon" />
              </div>
              <h3 className="plan_title">
                Integrity <span>Plus</span>{" "}
              </h3>
              <p className="financing_para integrityPlus_para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore voluptatibus neque quas modi excepturi eveniet impedit
                quam sit optio corrupti! Labore dolorum maiores similique
                ratione magni expedita deleniti itaque pariatur quia veritatis
                exercitationem obcaecati consectetur, temporibus eos aliquid
                doloribus ea autem alias iste? Nulla quis, at explicabo nisi
                beatae harum!
              </p>
            </div>
          </div>
        </div>
        {/* <div className="financing_bg base_parallax_layer "> */}
        {/* instead of having a 'base' layer in these groups, just just inherent scroll speed, and add bg video or img to the individual .parallax_group div, but in the aboutUs.css, */}
        {/* </div> */}
      </div>
      <div className="section locations_section parallax_group ">
        {/* <h2 className="locations_title">Our Locations</h2> */}
        <div className="locations_text top_parallax_layer ">
          <h2 className="locations_title">
            Our <i>Locations</i>
          </h2>
          <div className=" location_container diberville_container">
            <img
              src={dealership_img2}
              alt="dealership_img2"
              className="location_img diberville_img"
            />
            <div className="location_text_container diberville_text_container">
              <h2 className="location_title diberville_title">
                D'Iberville, MS
              </h2>
              <div className="details_box">
                <div className="details_box_left">
                  <p className="location_para diberville_para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore voluptatibus neque quas modi excepturi eveniet
                    impedit quam sit optio corrupti! Labore dolorum maiores
                    similique ratione magni expedita deleniti itaque pariatur
                    quia veritatis exercitationem obcaecati consectetur,
                    temporibus eos aliquid doloribus ea autem alias iste? Nulla
                    quis, at explicabo nisi beatae harum!
                  </p>
                  <div className="socialMedia_box">
                    <span className="web_span">
                      <Web />{" "}
                      <a className="store_link" href="https://holmesmotors.com">
                        Website
                      </a>
                    </span>
                    <span className="web_span">
                      <img
                        className="footer_icon quickLink_img"
                        src={fb_logo}
                        alt="fb_logo"
                      />{" "}
                      <a className="store_link" href="https://holmesmotors.com">
                        Facebook
                      </a>
                    </span>
                    <span className="web_span">
                      <img
                        className="footer_icon quickLink_img"
                        src={insta_logo}
                        alt="insta_logo"
                      />{" "}
                      <a className="store_link" href="https://holmesmotors.com">
                        {" "}
                        {/* fix this */}
                        Instagram
                      </a>
                    </span>
                  </div>
                </div>
                <div className="details_panel">
                  <h4 className="label address_label">Address</h4>
                  <p className="address_text">
                    <img
                      className="footer_icon quickLink_img"
                      src={home_icon}
                      alt="home_icon"
                    />{" "}
                    10651 Boney Ave, D'Iberville, MS 39540
                  </p>
                  <h4 className="label phone_label">Phone</h4>
                  <p className="phone_text">
                    <img
                      className="footer_icon quickLink_img"
                      src={phone_icon}
                      alt="phone_icon"
                    />
                    (228) 392-4054
                  </p>
                  <h4 className="label hours_label">Hours</h4>
                  <div className="hours_table">
                    <div className="hours_row mon_row">
                      <div className="day_col mon_col">Monday</div>
                      <div className="hours_col">8:00am - 6:00pm</div>
                    </div>
                    <div className="hours_row tues_row">
                      <div className="day_col tues_col">Tuesday</div>
                      <div className="hours_col">8:00am - 6:00pm</div>
                    </div>
                    <div className="hours_row wed_row">
                      <div className="day_col wed_col">Wednesday</div>
                      <div className="hours_col">8:00am - 6:00pm</div>
                    </div>
                    <div className="hours_row thur_row">
                      <div className="day_col thur_col">Thusday</div>
                      <div className="hours_col">8:00am - 6:00pm</div>
                    </div>
                    <div className="hours_row fri_row">
                      <div className="day_col fri_col">Friday</div>
                      <div className="hours_col">8:00am - 6:00pm</div>
                    </div>
                    <div className="hours_row sat_row">
                      <div className="day_col sat_col">Saturday</div>
                      <div className="hours_col">9:00am - 4:00pm</div>
                    </div>
                    <div className="hours_row sun_row">
                      <div className="day_col sun_col">Sunday</div>
                      <div className="hours_col">CLOSED</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="location_container douglasville_container">
            <img
              src={dealership_img2}
              alt="dealership_img2"
              className="location_img douglasville_img"
            />
            <div className="location_text_container douglasville_text_container">
              <h2 className="location_title douglasville_title">
                Douglasville, GA
              </h2>
              <div className="details_box">
                <div className="details_box_left">
                  <p className="location_para douglasville_para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore voluptatibus neque quas modi excepturi eveniet
                    impedit quam sit optio corrupti! Labore dolorum maiores
                    similique ratione magni expedita deleniti itaque pariatur
                    quia veritatis exercitationem obcaecati consectetur,
                    temporibus eos aliquid doloribus ea autem alias iste? Nulla
                    quis, at explicabo nisi beatae harum!
                  </p>
                  <div className="socialMedia_box">
                    <span className="web_span">
                      <Web />{" "}
                      <a className="store_link" href="https://holmesmotors.com">
                        Website
                      </a>
                    </span>
                    <span className="web_span">
                      <img
                        className="footer_icon quickLink_img"
                        src={fb_logo}
                        alt="fb_logo"
                      />{" "}
                      <a className="store_link" href="https://holmesmotors.com">
                        Facebook
                      </a>
                    </span>
                    <span className="web_span">
                      <img
                        className="footer_icon quickLink_img"
                        src={insta_logo}
                        alt="insta_logo"
                      />{" "}
                      <a className="store_link" href="https://holmesmotors.com">
                        {" "}
                        {/* fix this */}
                        Instagram
                      </a>
                    </span>
                  </div>
                </div>
                <div className="details_panel">
                  <h4 className="label address_label">Address</h4>
                  <p className="address_text">
                    <img
                      className="footer_icon quickLink_img"
                      src={home_icon}
                      alt="home_icon"
                    />{" "}
                    7498 Douglas Blvd, Douglasville, GA 30135
                  </p>
                  <h4 className="label phone_label">Phone</h4>
                  <p className="phone_text">
                    {" "}
                    <img
                      className="footer_icon quickLink_img"
                      src={phone_icon}
                      alt="phone_icon"
                    />
                    (678) 809-1595
                  </p>
                  <h4 className="label hours_label">Hours</h4>
                  <div className="hours_table">
                    <div className="hours_row mon_row">
                      <div className="day_col mon_col">Monday</div>
                      <div className="hours_col">8:30am - 6:00pm</div>
                    </div>
                    <div className="hours_row tues_row">
                      <div className="day_col tues_col">Tuesday</div>
                      <div className="hours_col">8:30am - 6:00pm</div>
                    </div>
                    <div className="hours_row wed_row">
                      <div className="day_col wed_col">Wednesday</div>
                      <div className="hours_col">8:30am - 6:00pm</div>
                    </div>
                    <div className="hours_row thur_row">
                      <div className="day_col thur_col">Thusday</div>
                      <div className="hours_col">8:30am - 6:00pm</div>
                    </div>
                    <div className="hours_row fri_row">
                      <div className="day_col fri_col">Friday</div>
                      <div className="hours_col">8:30am - 6:00pm</div>
                    </div>
                    <div className="hours_row sat_row">
                      <div className="day_col sat_col">Saturday</div>
                      <div className="hours_col">10:00am - 5:00pm</div>
                    </div>
                    <div className="hours_row sun_row">
                      <div className="day_col sun_col">Sunday</div>
                      <div className="hours_col">CLOSED</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" location_container montgomery_container">
            <img
              src={dealership_img2}
              alt="dealership_img2"
              className="location_img montgomery_img"
            />
            <div className="location_text_container montgomery_text_container">
              <h2 className="location_title montgomery_title">
                Montgomery, AL
              </h2>
              <div className="details_box">
                <div className="details_box_left">
                  <p className="location_para montgomery_para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore voluptatibus neque quas modi excepturi eveniet
                    impedit quam sit optio corrupti! Labore dolorum maiores
                    similique ratione magni expedita deleniti itaque pariatur
                    quia veritatis exercitationem obcaecati consectetur,
                    temporibus eos aliquid doloribus ea autem alias iste? Nulla
                    quis, at explicabo nisi beatae harum!
                  </p>
                  <div className="socialMedia_box">
                    <span className="web_span">
                      <Web />{" "}
                      <a className="store_link" href="https://holmesmotors.com">
                        Website
                      </a>
                    </span>
                    <span className="web_span">
                      <img
                        className="footer_icon quickLink_img"
                        src={fb_logo}
                        alt="fb_logo"
                      />{" "}
                      <a className="store_link" href="https://holmesmotors.com">
                        Facebook
                      </a>
                    </span>
                    <span className="web_span">
                      <img
                        className="footer_icon quickLink_img"
                        src={insta_logo}
                        alt="insta_logo"
                      />{" "}
                      <a className="store_link" href="https://holmesmotors.com">
                        {" "}
                        {/* fix this */}
                        Instagram
                      </a>
                    </span>
                  </div>
                </div>
                <div className="details_panel">
                  <h4 className="label address_label">Address</h4>
                  <p className="address_text">
                    <img
                      className="footer_icon quickLink_img"
                      src={home_icon}
                      alt="home_icon"
                    />{" "}
                    405 Eastern Blvd, Montgomery, AL 36117
                  </p>
                  <h4 className="label phone_label">Phone</h4>
                  <p className="phone_text">
                    {" "}
                    <img
                      className="footer_icon quickLink_img"
                      src={phone_icon}
                      alt="phone_icon"
                    />
                    (334) 339-3464
                  </p>
                  <h4 className="label hours_label">Hours</h4>
                  <div className="hours_table">
                    <div className="hours_row mon_row">
                      <div className="day_col mon_col">Monday</div>
                      <div className="hours_col">8:30am - 6:00pm</div>
                    </div>
                    <div className="hours_row tues_row">
                      <div className="day_col tues_col">Tuesday</div>
                      <div className="hours_col">8:30am - 6:00pm</div>
                    </div>
                    <div className="hours_row wed_row">
                      <div className="day_col wed_col">Wednesday</div>
                      <div className="hours_col">8:30am - 6:00pm</div>
                    </div>
                    <div className="hours_row thur_row">
                      <div className="day_col thur_col">Thusday</div>
                      <div className="hours_col">8:30am - 6:00pm</div>
                    </div>
                    <div className="hours_row fri_row">
                      <div className="day_col fri_col">Friday</div>
                      <div className="hours_col">8:30am - 6:00pm</div>
                    </div>
                    <div className="hours_row sat_row">
                      <div className="day_col sat_col">Saturday</div>
                      <div className="hours_col">10:00am - 5:00pm</div>
                    </div>
                    <div className="hours_row sun_row">
                      <div className="day_col sun_col">Sunday</div>
                      <div className="hours_col">CLOSED</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" location_container birmingham_container">
            <img
              src={dealership_img2}
              alt="dealership_img2"
              className="location_img birmingham_img"
            />
            <div className="location_text_container birmingham_text_container">
              <h2 className="location_title birmingham_title">
                Birmingham, AL
              </h2>
              <div className="details_box">
                <div className="details_box_left">
                  <p className="location_para birmingham_para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore voluptatibus neque quas modi excepturi eveniet
                    impedit quam sit optio corrupti! Labore dolorum maiores
                    similique ratione magni expedita deleniti itaque pariatur
                    quia veritatis exercitationem obcaecati consectetur,
                    temporibus eos aliquid doloribus ea autem alias iste? Nulla
                    quis, at explicabo nisi beatae harum!
                  </p>
                  <div className="socialMedia_box">
                    <span className="web_span">
                      <Web />{" "}
                      <a className="store_link" href="https://holmesmotors.com">
                        Website
                      </a>
                    </span>
                    <span className="web_span">
                      <img
                        className="footer_icon quickLink_img"
                        src={fb_logo}
                        alt="fb_logo"
                      />{" "}
                      <a className="store_link" href="https://holmesmotors.com">
                        Facebook
                      </a>
                    </span>
                    <span className="web_span">
                      <img
                        className="footer_icon quickLink_img"
                        src={insta_logo}
                        alt="insta_logo"
                      />{" "}
                      <a className="store_link" href="https://holmesmotors.com">
                        {" "}
                        {/* fix this */}
                        Instagram
                      </a>
                    </span>
                  </div>
                </div>
                <div className="details_panel">
                  <h4 className="label address_label">Address</h4>
                  <p className="address_text">
                    <img
                      className="footer_icon quickLink_img"
                      src={home_icon}
                      alt="home_icon"
                    />{" "}
                    9008 Parkway E, Birmingham, AL 35206
                  </p>
                  <h4 className="label phone_label">Phone</h4>
                  <p className="phone_text">
                    {" "}
                    <img
                      className="footer_icon quickLink_img"
                      src={phone_icon}
                      alt="phone_icon"
                    />
                    (205) 395-3123
                  </p>
                  <h4 className="label hours_label">Hours</h4>
                  <div className="hours_table">
                    <div className="hours_row mon_row">
                      <div className="day_col mon_col">Monday</div>
                      <div className="hours_col">8:00am - 6:00pm</div>
                    </div>
                    <div className="hours_row tues_row">
                      <div className="day_col tues_col">Tuesday</div>
                      <div className="hours_col">8:30am - 6:00pm</div>
                    </div>
                    <div className="hours_row wed_row">
                      <div className="day_col wed_col">Wednesday</div>
                      <div className="hours_col">8:30am - 6:00pm</div>
                    </div>
                    <div className="hours_row thur_row">
                      <div className="day_col thur_col">Thusday</div>
                      <div className="hours_col">8:30am - 6:00pm</div>
                    </div>
                    <div className="hours_row fri_row">
                      <div className="day_col fri_col">Friday</div>
                      <div className="hours_col">8:30am - 6:00pm</div>
                    </div>
                    <div className="hours_row sat_row">
                      <div className="day_col sat_col">Saturday</div>
                      <div className="hours_col">10:00am - 5:00pm</div>
                    </div>
                    <div className="hours_row sun_row">
                      <div className="day_col sun_col">Sunday</div>
                      <div className="hours_col">CLOSED</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
