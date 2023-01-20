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


