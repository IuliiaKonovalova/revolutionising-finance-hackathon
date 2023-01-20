const apiKey = "dc25Xb49AgAGTwWdnMICd4AbhXx3dAvh";
const apiSecret = "6lZAsTw9hqhPPvgv";
const grantType = "client_credentials";


const amadeusInput = document.getElementById("amadeus-input");
const amadeusButton = document.getElementById("amadeus-button");
const amadeusResult = document.getElementById("amadeus-result");






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



// create a fetch request to the API
const amadeusFetch = function() {
  // get data from the input field
  const amadeusInputValue = amadeusInput.value;


}


// add event listener to the button
amadeusButton.addEventListener("click", amadeusFetch);