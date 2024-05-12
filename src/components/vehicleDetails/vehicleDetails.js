import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./vehicleDetails.css";

const VehicleDetails = (vehicle) => {
  const { stockNumber } = useParams();
  const location = useLocation();
  // const { vehicle } = location.state || {};
  console.log(stockNumber);
  console.log(vehicle);

  return (
    <div className="route_container vehicleDetails_container">
      <h2>Vehicle Details</h2>
      <p>Stock Number: {stockNumber}</p>
      {/* Render other vehicle details using the found vehicle object */}
      {vehicle && (
        <div>
          <p>Make: {vehicle.make}</p>
          <p>Model: {vehicle.model}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default VehicleDetails;

//
