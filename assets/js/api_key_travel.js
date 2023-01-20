const apiKey = "dc25Xb49AgAGTwWdnMICd4AbhXx3dAvh";
const apiSecret = "6lZAsTw9hqhPPvgv";
const grantType = "client_credentials";


const amadeusInput = document.getElementById("amadeus-input");
const amadeusButton = document.getElementById("amadeus-button");
const amadeusResult = document.getElementById("amadeus-result");

const longlatApiKey = "ChURwrLnW6pGX0zk2OWBRg==14Dkv21DHTJioryM";

// get latitude and longitude from the input field from geonames

let country = "Germany";
let city = "London";
let latitude;
let longitude;

const getLongLat = async () => {
  const longlatUrl = `https://api.api-ninjas.com/v1/city?name=${city}`;
  const longlatHeaders = {
    "X-Api-Key": longlatApiKey,
  };
  const longlatResponse = await fetch(longlatUrl, {
    method: "GET",
    headers: longlatHeaders,
  });
  const longlatData = await longlatResponse.json();
  console.log(longlatData);
  console.log(longlatData[0].latitude);
  console.log(longlatData[0].longitude);
  // check the type of longlatData[0].latitude
  console.log(typeof longlatData[0].latitude);
  // convert to integer
  latitude = longlatData[0].latitude;
  longitude = longlatData[0].longitude;
  // get latitiude and longitude from the 


  return longlatData;
};

const longlat = getLongLat();




const obtainToken = async () => {
  const amadeusUrl = "https://test.api.amadeus.com/v1/security/oauth2/token";
  const amadeusHeaders = {
      "Content-Type": "application/x-www-form-urlencoded",
  };
  const amadeusBody = `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`;
  const amadeusResponse = await fetch(amadeusUrl, {
      method: "POST",
      headers: amadeusHeaders,
      body: amadeusBody,
  });
  const amadeusData = await amadeusResponse.json();
  console.log(amadeusData.access_token);
  return amadeusData.access_token;
};


const locationPois = async (lat, long) => {
  const amadeusUrl = `https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=${lat}&longitude=${long}&radius=5`
  const amadeusHeaders = {
    "Authorization": `Bearer ${await obtainToken()}`,
  };
  const amadeusResponse = await fetch(amadeusUrl, {
    method: "GET",
    headers: amadeusHeaders,
  });
  const amadeusData = await amadeusResponse.json();
  console.log(amadeusData.data);
  return amadeusData.data;
};

const locations = locationPois(51.5072, -0.1275);

// Promise to get the latitude and longitude
getLongLat().then(() => {
  locationPois(latitude, longitude);
});
console.log(locations);

// create a fetch request to the API
const amadeusFetch = function() {
  // get data from the input field
  const amadeusInputValue = amadeusInput.value;


}


// add event listener to the button
amadeusButton.addEventListener("click", amadeusFetch);