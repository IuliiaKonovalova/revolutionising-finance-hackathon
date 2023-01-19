let fromCountrySelect = document.getElementById("fromCountry");
let toCountrySelect = document.getElementById("toCountry");
<<<<<<< HEAD
// gets the api for countries
=======
let buttonCalculate = document.getElementById("button-calculate");
// gets the api for countries to be picked by user
// the api is non active just a dummy 
>>>>>>> 7ed1e97 (Add event listener on clalculate button)
fetch("https://api.exchangerate-api.com/v4/countries?apikey=your_api_key")
  .then(response => response.json())
  .then(data => {
    let countries = data.countries;
    for (let country in countries) {
      let option = document.createElement("option");
      option.value = country;
      option.text = countries[country];
      fromCountrySelect.add(option);
      toCountrySelect.add(option.cloneNode(true));
    }
  })
  .catch(error => {
    console.log(error);
  });

// function to calc and convert
const calculateFinal = function() {
  // users current amount of money
  let money = document.getElementById("money").value;

  // where user is located
  let fromCountry = fromCountrySelect.value;

  // get users location
  let toCountry = toCountrySelect.value;

  // Use API to retrieve exchange rate between countries
  // the api is non active just a dummy 
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

<<<<<<< HEAD
=======
buttonCalculate.addEventListener("click", calculateFinal);

// test
>>>>>>> 7ed1e97 (Add event listener on clalculate button)
