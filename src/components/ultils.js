export function mileageFormatter(value) {
  // Convert value to a number if it's a string
  const numberValue = typeof value === "string" ? parseFloat(value) : value;

  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(numberValue);
}

export function moneyFormatter(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function getUniqueValues(records, field) {
  //also alphabetize the array
  if (field === "location") {
    return Array.from(
      new Set(
        records
          .filter((item) => item.location) // get all inventory items that have 'location' value assigned
          .map((item) => item.location) // Extract location values
      )
    );
  } else if (field === "make") {
    return Array.from(
      new Set(
        records
          .filter((item) => item.make) // get all inventory items that have 'location' value assigned
          .map((item) => item.make) // Extract location values
      )
    );
  } else if (field === "model") {
    return Array.from(
      new Set(
        records
          .filter((item) => item.model) // get all inventory items that have 'location' value assigned
          .map((item) => item.model) // Extract location values
      )
    );
  } else if (field === "transmission") {
    return Array.from(
      new Set(
        records
          .filter((item) => item.transmission) // get all inventory items that have 'location' value assigned
          .map((item) => item.transmission) // Extract location values
      )
    );
  } else if (field === "color") {
    return Array.from(
      new Set(
        records
          .filter((item) => item.color) // get all inventory items that have 'location' value assigned
          .map((item) => item.color) // Extract location values
      )
    );
  }
}

export function locationFormatter(value) {
  if (/(holmes)/i.test(value)) {
    return "D'Iberville, MS";
  } else if (/(bham)/i.test(value)) {
    return "Birmingham, AL";
  } else if (/(douglas)/i.test(value)) {
    return "Douglasville, GA";
  } else if (/(montgomery)/i.test(value)) {
    return "Montgomery, AL";
  }
}

// There needs to be a first step of turning all field values into the appropriate data type, before they are looped through and run through these functions
