
function convertCurrency() {
  // Where the user selects country
  let fromCountry = document.getElementById("fromCountry").value;

  // How much money the user has to spend
  let money = document.getElementById("money").value;

  // where the user wants to go
  let toCountry = document.getElementById("toCountry").value;

  // Use API to retrieve exchange rate between countries
  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCountry}`)
    .then(response => response.json())
    .then(data => {
      // calculation
      let exchangeRate = data.rates[toCountry];
      let travelMoney = money * exchangeRate;

      // Display result to user
      let result = `You would have ${travelMoney} ${toCountry} in ${toCountry}.`;
      document.getElementById("result").innerHTML = result;
    })
    .catch(error => {
      console.log(error);
    });
}

