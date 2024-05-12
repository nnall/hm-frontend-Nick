import {
  mileageFormatter,
  moneyFormatter,
  getUniqueValues,
  locationFormatter,
} from "./ultils.js";

const normalizeFilter = (inventory, storeInv) => {
  // Check if inventory is null or undefined
  if (!inventory) {
    console.error("Inventory is null or undefined");
    return [];
  }

  console.log(storeInv);

  //FILTER OUT any records with missing 'location' field
  inventory.filter(
    (item) => item.location !== null && item.location !== undefined
  );

  //ALL inventory records UP TO THIS POINT HAVE A 'LOCATION' VALUE

  const rawUniqueLocations = getUniqueValues(inventory, "location");
  //Formatting unique raw locations
  const formattedLocations = rawUniqueLocations.map((location) => {
    return locationFormatter(location);
  });
  //CHECK IF FORMATTER GOT ALL UNIQUE RAW LOCATIONS
  if (
    formattedLocations.some(
      (location) => location === null || location === undefined
    )
  ) {
    alert("Unformattable location value in raw inventory");
  }

  //FORMAT ALL INVENTORY RECORDS
  const inventoryFormatted = inventory.map((item) => {
    return {
      ...item,
      location: locationFormatter(item.location),
      requireddown: moneyFormatter(item.requireddown),
      retailprice: moneyFormatter(item.retailprice),
      mileage: mileageFormatter(item.mileage),
    };
  });

  // console.log(inventoryFormatted);
  //FILTER BY LOCATION and return filtered inventory
  if (storeInv == 1) {
    return inventoryFormatted.filter(
      (item) => item.location === "D'Iberville, MS"
    );
  } else if (storeInv == 2) {
    return inventoryFormatted.filter(
      (item) => item.location === "Douglasville, GA"
    );
  } else if (storeInv == 3) {
    return inventoryFormatted.filter(
      (item) => item.location === "Montgomery, AL"
    );
  } else if (storeInv == 4) {
    return inventoryFormatted.filter(
      (item) => item.location === "Birmingham, AL"
    );
  }
};

export default normalizeFilter;
