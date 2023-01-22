const APIKey = '4e21e51b0599ed099d6b98c4';
const base = document.querySelector('#countries-select').value;
let calculate = document.getElementById("button-calculate");
console.log(base, calculate);
const currencyFromCountry = document.getElementById("currency-from");
console.log(currencyFromCountry);
const currencyToCountry = document.getElementById("currency-to");
console.log(currencyToCountry);
document.querySelector('#form').onsubmit = () => {
    console.log(currencyFromCountry)
    const currencyFromCountryValue = currencyFromCountry.innerHTML;
    const currencyToCountryValue = document.querySelector("#currency-to").innerHTML;
    console.log(currencyFromCountryValue)
    console.log(currencyToCountryValue)
    console.log(base, calculate);
    fetch(`https://v6.exchangerate-api.com/v6/${APIKey}/latest/${currencyFromCountryValue}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            const amount = document.querySelector("#money").value;
            const rate = data.conversion_rates[currencyToCountryValue];
            console.log(amount, currencyToCountryValue, rate)
            function convert() {
                return amount * rate;
            }
            document.querySelector('#result').innerHTML = `${amount} ${base.toUpperCase()} is equal to ${currencyToCountryValue} ${convert().toFixed(2)}`;
            
        })
        
        .catch((error) => {
            console.log("Error: ", error);
        });
    return false;
}