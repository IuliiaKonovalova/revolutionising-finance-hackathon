
// function to calc and convert
function convertCurrency() {
  // users current amount of money
  let money = document.getElementById("money").value;

  // where user is located
  let fromCountry = fromCountrySelect.value;

  // get users location
  let toCountry = toCountrySelect.value;

  // Use API to retrieve exchange rate between countries
  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCountry}?apikey=your_api_key`)
    .then(response => response.json())
    .then(data => {
      // Calculation
      let exchangeRate = data.rates[toCountry];
      let travelMoney = money * exchangeRate;

      // result
      let result = `You would have ${travelMoney} ${toCountry} in ${toCountry}.`;
      document.getElementById("result").innerHTML = result;
    })
    .catch(error => {
      console.log(error);
    });
}

>>>>>>> 81d968a (add JS logic to display/calc HTML)
