const APIKey = '4e21e51b0599ed099d6b98c4';
const currencyFromCountry = document.getElementById("currency-from");

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
            //Function to calculate the value of money in destination country
            function convert() {
                return amount * rate;
            }
            document.querySelector('#result').innerHTML = `<div class="currency__result--final">${amount} ${currencyFromCountryValue}</div> is equal to <div class="currency__result--final">${currencyToCountryValue} ${convert().toFixed(2)}</div>`;
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
    return false;
};