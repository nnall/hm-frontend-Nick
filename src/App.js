import React, { useState, useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
  useLocation,
} from "react-router-dom";
//PAGES
import Home from "./pages/home/home";
import Inventory from "./pages/inventory/inventory";
import AboutUs from "./pages/aboutUs/aboutUs";
import TradeIn from "./pages/tradeIn/tradeIn";
import Store from "./pages/stores/store"; /* will be an arg-fed component 
import*/
import VehicleDetails from "./components/vehicleDetails/vehicleDetails";
import AppNav from "./components/appNav/appNav";

//components on ALL PAGES
import Footer from "./components/footer/footer";
import Chatbox from "./components/chatbox/chatbox";

import AnimatedRoutes from "./animatedRoutes";

import "./index.css";

import HM_img from "./assets/images/HM_multi.webp";

import { ReactComponent as Chat1 } from "./assets/icons/chat1.svg";
import { ReactComponent as Chat2 } from "./assets/icons/chat_dots.svg";

function App() {
  ///////////////

  const [showChatbox, setShowChatbox] = useState(false);

  // DIBERVILLE DATA
  const dbvData = {
    key: "1",
    location: "D'Iberville",
    address: "10651 Boney Ave, D'Iberville, MS 39540",
    phone: "(228) 392-4054",
    email: "sales@holmesmotors.com",
    fb_link: "https://www.facebook.com/BiloxiUsedCars/",
    insta_link: "https://www.instagram.com/holmesmotors_diberville/",
    hours: {
      Monday: "8:30 AM - 6:00 PM",
      Tuesday: "8:30 AM - 6:00 PM",
      Wednesday: "8:30 AM - 6:00 PM",
      Thursday: "8:30 AM - 6:00 PM",
      Friday: "8:30 AM - 6:00 PM",
      Saturday: "10:00 AM - 5:00 PM",
      Sunday: "Closed",
    },

    intro_blurb: {
      para1: `Welcome to Holmes Motors D'Iberville, where the warmth of Southern hospitality meets the excitement of finding your perfect ride! Nestled in the heart of the Mississippi Gulf Coast, our dealership stands as a beacon of reliability and trustworthiness for over three decades. Unlike any other, our location in D'Iberville is not just a showroom; it's a community hub where neighbors become family and dreams of driving off in a quality vehicle come true. What sets us apart is our deep-rooted commitment to our customers. As a family-owned and operated establishment, we understand the importance of building lasting relationships beyond the sale. Here, every interaction is infused with genuine care and personalized attention, ensuring that your journey with us is nothing short of exceptional.`,
      para2: `Step onto our lot and discover a meticulously curated selection of pre-owned vehicles that reflect our dedication to quality and variety. From sleek sedans to rugged SUVs, each car has been handpicked to meet the diverse needs and preferences of our discerning clientele. But our dedication doesn't stop at the showroom floor. Our experienced sales team isn't just here to sell you a car; they're your partners in finding the perfect vehicle to fit your lifestyle and budget. With their wealth of knowledge and genuine passion for cars, they'll guide you through every step of the buying process, making it as seamless and stress-free as possible. `,
      para3: `So why wait? Come experience the Holmes Motors difference for yourself. Whether you're in the market for your first car or looking to upgrade to something more suited to your evolving needs, our doors are always open, ready to welcome you into the Holmes Motors family. Your dream car awaits, and it's just a visit away at Holmes Motors D'Iberville!`,
    },
  };
  //DOUGLASVILLE DATA
  const dgvData = {
    key: "2",
    location: "Douglasville",
    address: "7498 Douglas Blvd, Douglasville, GA 30135",
    phone: "(678) 809-1595",
    email: "sales@holmesmotors.com",
    fb_link: "https://www.facebook.com/holmesmotorsdouglasville/",
    insta_link: "https://www.instagram.com/holmesmotors_douglasville/?hl=en",
    hours: {
      Monday: "8:30 AM - 6:00 PM",
      Tuesday: "8:30 AM - 6:00 PM",
      Wednesday: "8:30 AM - 6:00 PM",
      Thursday: "8:30 AM - 6:00 PM",
      Friday: "8:30 AM - 6:00 PM",
      Saturday: "10:00 AM - 5:00 PM",
      Sunday: "Closed",
    },
    intro_blurb: {
      para1: `Welcome to Holmes Motors Douglasville, where the warmth of Southern hospitality meets the excitement of finding your perfect ride! Nestled in the heart of the Georgia Gulf Coast, our dealership stands as a beacon of reliability and trustworthiness for over three decades. Unlike any other, our location in Douglasville is not just a showroom; it's a community hub where neighbors become family and dreams of driving off in a quality vehicle come true. What sets us apart is our deep-rooted commitment to our customers. As a family-owned and operated establishment, we understand the importance of building lasting relationships beyond the sale. Here, every interaction is infused with genuine care and personalized attention, ensuring that your journey with us is nothing short of exceptional.`,
      para2: `Step onto our lot and discover a meticulously curated selection of pre-owned vehicles that reflect our dedication to quality and variety. From sleek sedans to rugged SUVs, each car has been handpicked to meet the diverse needs and preferences of our discerning clientele. But our dedication doesn't stop at the showroom floor. Our experienced sales team isn't just here to sell you a car; they're your partners in finding the perfect vehicle to fit your lifestyle and budget. With their wealth of knowledge and genuine passion for cars, they'll guide you through every step of the buying process, making it as seamless and stress-free as possible.`,
      para3: `So why wait? Come experience the Holmes Motors difference for yourself. Whether you're in the market for your first car or looking to upgrade to something more suited to your evolving needs, our doors are always open, ready to welcome you into the Holmes Motors family. Your dream car awaits, and it's just a visit away at Holmes Motors Douglasville!`,
    },
  };

  //MONTGOMERY DATA
  const mgData = {
    key: "3",
    location: "Montgomery",
    address: "405 Eastern Blvd, Montgomery, AL 36117",
    phone: "(334) 339-3464",
    email: "sales@holmesmotors.com",
    fb_link: "https://www.facebook.com/Holmesmotorsal/",
    insta_link: "https://www.instagram.com/holmesmotors_montgomery/",
    hours: {
      Monday: "8:30 AM - 6:00 PM",
      Tuesday: "8:30 AM - 6:00 PM",
      Wednesday: "8:30 AM - 6:00 PM",
      Thursday: "8:30 AM - 6:00 PM",
      Friday: "8:30 AM - 6:00 PM",
      Saturday: "10:00 AM - 5:00 PM",
      Sunday: "Closed",
    },
    intro_blurb: {
      para1: `Welcome to Holmes Motors Montgomery, where the charm of Southern culture meets the excitement of finding your perfect ride! Situated in the heart of Montgomery, Alabama, our dealership has been a trusted name in the community for over three decades. Unlike any other, our location in Montgomery is not just a showroom; it's a cornerstone of the community where neighbors become family and dreams of driving off in a quality vehicle come true. What sets us apart is our deep-rooted commitment to our customers. As a family-owned and operated establishment, we understand the importance of building lasting relationships beyond the sale. Here, every interaction is infused with genuine care and personalized attention, ensuring that your journey with us is nothing short of exceptional.`,
      para2: `Step onto our lot and discover a meticulously curated selection of pre-owned vehicles that reflect our dedication to quality and variety. From elegant sedans to versatile SUVs, each car has been handpicked to meet the diverse needs and preferences of our discerning clientele. But our dedication doesn't stop at the showroom floor. Our experienced sales team isn't just here to sell you a car; they're your partners in finding the perfect vehicle to fit your lifestyle and budget. With their wealth of knowledge and genuine passion for cars, they'll guide you through every step of the buying process, making it as seamless and stress-free as possible.`,
      para3: `So why wait? Come experience the Holmes Motors difference for yourself. Whether you're in the market for your first car or looking to upgrade to something more suited to your evolving needs, our doors are always open, ready to welcome you into the Holmes Motors family. Your dream car awaits, and it's just a visit away at Holmes Motors Montgomery!`,
    },
  };
  //BIRMINGHAM DATA
  const bhData = {
    key: "4",
    location: "Birmingham",
    address: "9008 Parkway E, Birmingham, AL 35206",
    phone: "(205) 395-3123",
    email: "sales@holmesmotors.com",
    fb_link: "https://www.facebook.com/holmesmotorsbham/",
    insta_link: "https://www.instagram.com/holmesmotors_birmingham/?hl=en",
    hours: {
      Monday: "8:30 AM - 6:00 PM",
      Tuesday: "8:30 AM - 6:00 PM",
      Wednesday: "8:30 AM - 6:00 PM",
      Thursday: "8:30 AM - 6:00 PM",
      Friday: "8:30 AM - 6:00 PM",
      Saturday: "10:00 AM - 5:00 PM",
      Sunday: "Closed",
    },
    intro_blurb: {
      para1: `Welcome to Holmes Motors Birmingham, where the vibrancy of Southern culture meets the thrill of finding your perfect vehicle! Located in the heart of Birmingham, Alabama, our dealership has been a trusted pillar of the community for over three decades. Our Birmingham location is more than just a showroom; it's a cornerstone of the community, where neighbors become family and dreams of driving off in a quality vehicle come true. What sets us apart is our unwavering commitment to our customers. As a family-owned and operated establishment, we understand the importance of building lasting relationships beyond the sale. Every interaction here is infused with genuine care and personalized attention, ensuring that your experience with us is nothing short of extraordinary.`,
      para2: `Step onto our lot and explore a thoughtfully curated selection of pre-owned vehicles that reflect our dedication to quality and diversity. From stylish sedans to robust SUVs, each car has been carefully chosen to meet the diverse needs and preferences of our discerning clientele. But our commitment extends beyond the showroom floor. Our experienced sales team isn't just here to sell you a car; they're your partners in finding the perfect vehicle to match your lifestyle and budget. With their extensive knowledge and genuine passion for cars, they'll guide you through every step of the buying process, ensuring a seamless and stress-free experience.`,
      para3: `Don't wait any longer! Come discover the Holmes Motors difference for yourself. Whether you're in search of your first car or looking to upgrade to something more suited to your changing needs, our doors are always open, ready to welcome you into the Holmes Motors family. Your dream car is within reach, and it's waiting for you right here at Holmes Motors Birmingham!`,
    },
  };

  const allLocations = [dbvData, dgvData, mgData, bhData];

  const [displayNone, setDisplayNone] = useState(true);
  const [previouslyShown, setPreviouslyShown] = useState(false);

  const toggleChatbox = () => {
    if (previouslyShown && showChatbox) {
      setShowChatbox(false);
    } else if (showChatbox === false) {
      setPreviouslyShown(true);
      setShowChatbox(true);
    }
  };

  return (
    <Router>
      {/* <img src={HM_img} className="main_home_logo" alt="holmes_motors_logo" /> */}
      <AppNav />
      {/* <AnimatedRoutes /> */}
      <Routes /* location={location} */ /* key={location.pathname} */>
        <Route index path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route
          path="/about-us"
          element={<AboutUs allLocations={allLocations} />}
        />
        <Route path="/trade-in" element={<TradeIn />} />
        <Route
          path="/diberville"
          element={<Store storeInv={1} storeData={dbvData} />}
        />

        <Route
          path="/douglasville"
          element={<Store storeInv={2} storeData={dgvData} />}
        />
        <Route
          path="/montgomery"
          element={<Store storeInv={3} storeData={mgData} />}
        />
        <Route
          path="/birmingham"
          element={<Store storeInv={4} storeData={bhData} />}
        />

        <Route
          path="/vehicle-details/:stockNumber"
          element={<VehicleDetails />}
        />
      </Routes>

      <button className="toggleChat_btn" onClick={toggleChatbox}>
        <Chat1 />
        <Chat2 />
      </button>

      <Chatbox
        className={showChatbox ? "chatbox-container show" : ""}
        showChatbox={showChatbox}
        previouslyShown={previouslyShown}
        toggleChatbox={toggleChatbox}
        displayNone={displayNone}
      />
    </Router>
  );
}

export default App;
