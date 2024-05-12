import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rellax from "rellax";

const InventoryCarousel = ({ vehicles }) => {
  //   "storeInv";
  console.log(vehicles);

  return (
    <div className="inventoryCarousel_container">
      <div className="carousel">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="carousel_item">
            {/* <img src={vehicle.img} alt={`${vehicle.make} ${vehicle.model}`} /> */}
            <h3>
              {vehicle.year}
              {vehicle.make} {vehicle.model}
            </h3>
            <p>Stock Number: {vehicle.stock}</p>
            {/* <Link
              to={`/vehicle-details/${vehicle.stock}`}
              vehicle={vehicle}
            >
              See This Car
            </Link> */}
            <Link
              to={{
                state: { vehicle },
                pathname: `/vehicle-details/${vehicle.stock}`,
              }}
            >
              See This Car
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryCarousel;
