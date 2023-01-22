const APIKey = '4e21e51b0599ed099d6b98c4';
const base = document.querySelector('#countries-select').value;
let calculate = document.getElementById("button-calculate")

document.querySelector('#form').onsubmit = () => {
    fetch(`https://v6.exchangerate-api.com/v6/${APIKey}/latest/USD`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            const amount = document.querySelector("#money").value;
            const currencyTo = document.querySelector("#currency-to").value;
            const rate = data.conversion_rates[currencyTo];
            function convert() {
                return amount * rate;
            }
            document.querySelector('#result').innerHTML = `${amount} ${base.toUpperCase()} is equal to ${currencyTo} ${convert().toFixed(2)}`;
            console.log(`${amount} ${base.toUpperCase()} is equal to ${currencyTo} ${convert().toFixed(2)}`)
        })
        
        .catch((error) => {
            console.log("Error: ", error);
        });
    return false;
}