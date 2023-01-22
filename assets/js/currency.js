const APIKey = '4e21e51b0599ed099d6b98c4';
// const base = document.querySelector('#countries-select').value;
let calculate = document.getElementById("button-calculate");
const currencyFromCountry = document.getElementById("currency-from");
const currencyToCountry = document.getElementById("currency-to");
//Exchange Rate Function
document.querySelector('#form').onsubmit = () => {
    const currencyFromCountryValue = currencyFromCountry.innerHTML;
    const currencyToCountryValue = document.querySelector("#currency-to").innerHTML;
    fetch(`https://v6.exchangerate-api.com/v6/${APIKey}/latest/${currencyFromCountryValue}`)
        .then((response) => response.json())
        .then((data) => {
            const amount = document.querySelector("#money").value;
            const rate = data.conversion_rates[currencyToCountryValue];
            //Function to calculate the value of money in destination country
            function convert() {
                return amount * rate;
            }
            document.querySelector('#result').innerHTML = `${amount} ${currencyFromCountryValue} is equal to ${currencyToCountryValue} ${convert().toFixed(2)}`;
            document.querySelector('#result').innerHTML = `${amount} ${currencyFromCountryValue} is equal to ${currencyToCountryValue} ${convert().toFixed(2)}`;
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
    return false;
};