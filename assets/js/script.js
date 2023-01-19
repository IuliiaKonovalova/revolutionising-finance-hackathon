<<<<<<< HEAD
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
=======

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

>>>>>>> 81d968a (add JS logic to display/calc HTML)
