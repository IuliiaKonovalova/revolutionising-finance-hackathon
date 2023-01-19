<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD








let fromCountrySelect = document.getElementById("fromCountry");
let toCountrySelect = document.getElementById("toCountry");
let buttonCalculate = document.getElementById("button-calculate");
// gets the api for countries to be picked by user
// the api is non active just a dummy 
=======
let fromCountrySelect = document.getElementById("fromCountry");
let toCountrySelect = document.getElementById("toCountry");
// gets the api for countries
>>>>>>> 3bdcc4b (trying to solve problem)
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
<<<<<<< HEAD

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

buttonCalculate.addEventListener("click", calculateFinal);

// test
=======
=======
>>>>>>> a50dea7 (add JS logic to display/calc HTML)
// API endpoint for getting exchange rates
const API_ENDPOINT = "https://api.exchangerate-api.com/v4/latest";

// Function to get the exchange rate
function getExchangeRate(fromCurrency, toCurrency) {
    return fetch(`${API_ENDPOINT}/${fromCurrency}`)
        .then(response => response.json())
        .then(data => data.rates[toCurrency]);
}

// Function to convert the currency
function convertCurrency(amount, fromCurrency, toCurrency) {
    return getExchangeRate(fromCurrency, toCurrency).then(rate => amount * rate);
}

// Function to handle the form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    convertCurrency(amount, fromCurrency, toCurrency)
        .then(convertedAmount => {
            document.getElementById("result").innerHTML = `${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}`;
        })
        .catch(error => console.error(error));
}

// Add an event listener to the form
document.getElementById("conversion-form").addEventListener("submit", handleFormSubmit);

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });
<<<<<<< HEAD
>>>>>>> 6cc5b72 (Javascript functionality and trying to figure out the html)
=======
=======
=======
>>>>>>> df57c49 (add function for selecting the country from dropdownbar)
=======
>>>>>>> 3bdcc4b (trying to solve problem)

// function to calc and convert
function convertCurrency() {
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

>>>>>>> 81d968a (add JS logic to display/calc HTML)
>>>>>>> a50dea7 (add JS logic to display/calc HTML)
