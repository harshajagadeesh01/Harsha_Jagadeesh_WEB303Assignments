/*
    Assignment #4
    {Harsha Jagadeesh}
*/

// If statement to check if geolocation is supported
if ("geolocation" in navigator) {

// Use Navigator and geolocation objects to find the current location

  navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const accuracy = position.coords.accuracy / 1000; 

    // Displaying current location with accuracy
    const locationHereDiv = document.getElementById("locationhere");
    locationHereDiv.textContent = `Latitude: ${latitude}, Longitude: ${longitude}, Accuracy: ${accuracy.toFixed(2)} km`;

    
    const storedLocation = localStorage.getItem("userLocation");


    if (storedLocation) {
      
        
      const storedLocationTag = document.createElement("p");
      storedLocationTag.textContent = `Last Stored Location: ${storedLocation}`;

    
      locationHereDiv.appendChild(storedLocationTag);

    
      const welcomeBackHeader = document.createElement("h2");
      welcomeBackHeader.textContent = "Welcome back to our website";

   
      locationHereDiv.appendChild(welcomeBackHeader);

      const distance = calcDistanceBetweenPoints(
        latitude,
        longitude,
        ...parseLocation(storedLocation)
      );


      if (!isNaN(distance)) {
        const distanceInKm = distance / 1000; 

        const distanceTag = document.createElement("p");
        distanceTag.textContent = `You traveled ${distanceInKm.toFixed(2)} km since your last visit.`;

        
        locationHereDiv.appendChild(distanceTag);
      }
    } 
    
    else {
      
      // Displaying a welcome message for the first-time visitor
      const welcomeHeader = document.createElement("h1");
      welcomeHeader.textContent = "Welcome to our website !";

      
      locationHereDiv.appendChild(welcomeHeader);
    }

    
    localStorage.setItem("userLocation", `${latitude}, ${longitude}`);
  });
} 

else {
  // Geolocation is not supported, display an error message
  const locationHereDiv = document.getElementById("locationhere");
  locationHereDiv.textContent = "Geolocation is not supported in this browser.";
}

// Function to parse location string into latitude and longitude
function parseLocation(locationString) {
  const [lat, lon] = locationString.split(", ").map(Number);
  return [lat, lon];
}

    

    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript

function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {

  var toRadians = function (num) {
    return (num * Math.PI) / 180;
  };
  var R = 6371000; // radius of Earth in metres
  var φ1 = toRadians(lat1);
  var φ2 = toRadians(lat2);
  var Δφ = toRadians(lat2 - lat1);
  var Δλ = toRadians(lon2 - lon1);

  var a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}
