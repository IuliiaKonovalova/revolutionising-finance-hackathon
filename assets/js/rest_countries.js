let selectedOption;

const countrySelect = document.getElementById("country-select");
console.log(countrySelect)

// Fetch the list of countries from the API
fetch("https://restcountries.com/v3.1/all")
.then(response => response.json())
.then(data => {
  // Get the select element that will hold the list of countries
  const select = document.getElementById("country-select");
  // Iterate through the list of countries and add an option for each one
  data.forEach(country => {
    // console.log(country)
    const option = document.createElement("option");
    option.value = country.alpha2Code;
    option.innerText = country.name.common;
    select.appendChild(option);
  });
  const selectDestination = document.getElementById("destination-select");
    // Iterate through the list of countries and add an option for each one
    data.forEach(country => {
      const option = document.createElement("option");
      option.value = country.altSpellings[0];
      option.innerText = country.name.common;
      if (country.name.common ==="United Kingdom") {
        // set selected option
        option.selected = true;
        console.log('selected')
      }
      selectDestination.appendChild(option);
      console.log(option)
  });
});
// const selectItem = function(e) {
//     value = e.target.countrySelect
//     console.log(value)
// }
countrySelect.addEventListener("change", selectItem)
// function onSelectItem(evt)
//         {
//             let value = evt.target.selectedOptions[0].value;
//             let text = evt.target.selectedOptions[0].text;

//             // Assign it how you want here:
//             selectedOption = value;
//         }















// fetch("https://restcountries.com/v3.1/all")
// .then(response => response.json())
// .then(data => {
//   // Get the select element that will hold the list of countries
//   const select = document.getElementById("country-select");
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
