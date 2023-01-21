let selectedOption;


// console.log(countrySelect)

// Fetch the list of countries from the API
let countries_data = [];

const fetchCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  countries_data = [...data]
  console.log(countries_data)

    return countries_data
};

fetchCountries().then((data) => {

  console.log(data)
  const select = document.getElementById("countries-select");
  // Iterate through the list of countries and add an option for each one
  data.forEach(country => {
    // console.log(country)
    const option = document.createElement("option");
    option.value = country.alpha2Code;
    option.innerText = country.name.common;
    select.appendChild(option);
  });
    const countrySelect = document.getElementById("countries-select");
    const selectDestination = document.getElementById("destination-select");
    // Iterate through the list of countries and add an option for each one

    data.forEach(country => {
      if (country.name.common ==="United Kingdom") {
        document.getElementById("country-from-selected").value = country.altSpellings[0]
        // add text to the select
        document.getElementById("country-from-selected").innerText = country.name.common
        // add data-attr-currency to the select
        let currencyCodeKeys = Object.keys(country.currencies)
        document.getElementById("country-from-selected").setAttribute("data-attr-currency", currencyCodeKeys[0])

        // target country-to-selected
        document.getElementById("country-to-selected").value = country.altSpellings[0]
        document.getElementById("country-to-selected").innerText = country.name.common
        document.getElementById("country-to-selected").setAttribute("data-attr-currency", currencyCodeKeys[0])

      } else {
        const option = document.createElement("option");
        if (country.currencies === undefined) {
          console.log("undefined")
          return
        } else {

          // console.log(country.currencies)
          console.log(country.currencies)

          let currencyCodeKeys = Object.keys(country.currencies)
          // get the values from currencyCodeKeys list
          option.setAttribute("data-attr-currency", currencyCodeKeys[0])
        }
        option.value = country.altSpellings[0];
        option.innerText = country.name.common;
        console.log(country.name.common)
        countrySelect.appendChild(option);
        selectDestination.appendChild(option);
        console.log(countrySelect)
        // add attribute to the option

        console.log(option)
      }
  });

})
















// fetch("https://restcountries.com/v3.1/all")
// .then(response => response.json())
// .then(data => {
//   // Get the select element that will hold the list of countries
//   const select = document.getElementById("countries-select");
//   // Iterate through the list of countries and add an option for each one
//   data.forEach(country => {
//     const option = document.createElement("option");
//     option.value = country.name.common;
//     option.innerText = country.name.common;
//     select.appendChild(option);
//   });
//   // Add an event listener to the select element that listens for the "change" event
//   select.addEventListener("change", (event) => {
//     // Find the country object whose name matches the value of the selected option
//     const selectedCountry = data.find(country => country.name.common === event.target.value);
//     // Get the currency of the selected country
//     const currency = selectedCountry.currencies[Object.keys(selectedCountry.currencies)[0]];
//     console.log(currency);
//   });
//   const selectDestination = document.getElementById("destination-select");
//   // Iterate through the list of countries and add an option for each one
//   data.forEach(country => {
//     const option = document.createElement("option");
//     option.value = country.name.common;
//     option.innerText = country.name.common;
//     selectDestination.appendChild(option);
//   });
//   // Add an event listener to the select element that listens for the "change" event
//   selectDestination.addEventListener("change", (event) => {
//     // Find the country object whose name matches the value of the selected option
//     const selectedCountry = data.find(country => country.name.common === event.target.value);
//     // Get the currency of the selected country
//     const currency = selectedCountry.currencies[Object.keys(selectedCountry.currencies)[0]];
//     console.log(currency);
//   });
//   const currencyDisplay = document.getElementById("currency-display");
//   currencyDisplay.innerHTML = `${currency.name}(${currency.symbol})`;
//   <div id="currency-display"></div>
// })
