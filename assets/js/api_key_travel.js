const apiKey = "dc25Xb49AgAGTwWdnMICd4AbhXx3dAvh";
const apiSecret = "6lZAsTw9hqhPPvgv";
const grantType = "client_credentials";


const amadeusInput = document.getElementById("amadeus-input");
const amadeusButton = document.getElementById("amadeus-button");
const amadeusResult = document.getElementById("amadeus-result");

const longlatApiKey = "ChURwrLnW6pGX0zk2OWBRg==14Dkv21DHTJioryM";

let latitude;
let longitude;

const getLongLat = async (city) => {
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
  return longlatData;
};


// const longlat = getLongLat();




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

// const locations = locationPois(51.5072, -0.1275);

// // Promise to get the latitude and longitude
// getLongLat().then(() => {
//   locationPois(latitude, longitude);
// });
// console.log(locations);

// create a fetch request to the API
const amadeusFetch = function() {
  // get data from the input field
  // add  spinner to amadeusResult
  amadeusResult.innerHTML = `
    <div class="">
      <div class=" center-align">
        <div class="spinner-border" role="status">
        <span class="visually-hidden">
          <div class="preloader-wrapper small active">
            <div class="spinner-layer spinner-green-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div><div class="gap-patch">
                <div class="circle"></div>
              </div><div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div>
        Loading...</span>
      </div>
    </div>
  </div>`;
  const city = amadeusInput.value;
  console.log(city);
  // get the latitude and longitude
  getLongLat(city).then(() => {
    // get the location points of interest
    locationPois(latitude, longitude).then((data) => {
      console.log(`data: ${data}`);
      if (data !== undefined) {
      // remove the spinner
      amadeusResult.innerHTML = "";
      // add the data to the result div
      data.forEach((poi) => {
        amadeusResult.insertAdjacentHTML("beforeend", `<div class="card">
        <div class="card-content">
          <h5 class="card-title sightseeing__cards--title">${poi.name}</h5>
          <p class="card-text">${poi.category}</p>
          <a href="https://www.google.com/search?q=${poi.name}" class="btn btn-primary green lighten-1" target="_blank">Go somewhere</a>
        </div>
      </div>`);
      });
    } else {
      amadeusResult.innerHTML = `<div class="">
      <div class=" center-align">

      No data found!

      </div>
    </div>`;

    }
    });
  });

}


// add event listener to the button
amadeusButton.addEventListener("click", amadeusFetch);