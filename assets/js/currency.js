const APIKey = '4e21e51b0599ed099d6b98c4'

document.querySelector('#form').onsubmit = () => {
    const base = document.querySelector('#fromCurrency').value;
    fetch(`https://v6.exchangerate-api.com/v6/${APIKey}/latest/USD`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            const amount = document.querySelector("#amount").value;
            const currencyTo = document.querySelector("#toCurrency").value;
            const rate = data.conversion_rates[currencyTo];
            function convert() {
                return amount * rate;
            }
            document.querySelector('#results').innerHTML = `${amount} ${base.toUpperCase()} equal to ${currencyTo} ${convert().toFixed(2)}`;
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
    return false;
}