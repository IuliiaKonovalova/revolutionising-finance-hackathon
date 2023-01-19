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