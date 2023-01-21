let selectedOption;

const countrySelect = document.getElementById("country-select");
// console.log(countrySelect)

// Fetch the list of countries from the API
let countries_data = [];

const fetchCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  countries_data = [...data]
  console.log(countries_data)
// fetch("https://restcountries.com/v3.1/all")
// .then(response => response.json())
// .then(data => {
//   // Get the select element that will hold the list of countries
//   const select = document.getElementById("country-select");
//   // Iterate through the list of countries and add an option for each one
//   data.forEach(country => {
//     // console.log(country)
//     const option = document.createElement("option");
//     option.value = country.alpha2Code;
//     option.innerText = country.name.common;
//     select.appendChild(option);
//   });
//   const selectDestination = document.getElementById("destination-select");
//     // Iterate through the list of countries and add an option for each one
//     countries_data = [...data]
//     console.log(countries_data)
//     data.forEach(country => {
//       if (country.name.common ==="United Kingdom") {
//         // append the option to the
//         // console.log(document.getElementById("country-selected"))
//         // add value to the select
//         document.getElementById("country-selected").value = country.altSpellings[0]
//         // add text to the select
//         document.getElementById("country-selected").innerText = country.name.common
//         // add data-attr-currency to the select
//         document.getElementById("country-selected").setAttribute("data-attr-currency", country.currencies.keys)
//         // selectDestination.innerHTML(`
//         // <option value="${country.altSpellings[0]}" selected>${country.name.common}</option>`)
//       } else {
//         const option = document.createElement("option");

//         console.log(country.currencies)
//         console.log(typeof(country.currencies))

//         let currencyCode = Object.keys(country.currencies)
//         // console.log(currencyCode)

//         option.value = country.altSpellings[0];
//         option.innerText = country.name.common;
//         selectDestination.appendChild(option);

//         // console.log(option)
//       }
//   });
    return countries_data
};

fetchCountries().then((data) => {

  console.log(data)
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
      if (country.name.common ==="United Kingdom") {
        console.log(country)
        console.log(country.currencies)
        // append the option to the
        console.log(document.getElementById("country-selected"))
        // add value to the select
        document.getElementById("country-selected").value = country.altSpellings[0]
        // add text to the select
        document.getElementById("country-selected").innerText = country.name.common
        // add data-attr-currency to the select
        document.getElementById("country-selected").setAttribute("data-attr-currency", "cur")
        // selectDestination.innerHTML(`
        // <option value="${country.altSpellings[0]}" selected>${country.name.common}</option>`)
        let currencyCodeKeys = Object.keys(country.currencies)
        console.log('currencyCodeKeys', currencyCodeKeys)
        // get the values from currencyCodeKeys list
        let keyCurrencyCode = currencyCodeKeys[0];
        console.log('keyCurrencyCode', keyCurrencyCode)
        currencyCodeKeys.forEach(key => {
          console.log('str', key)
        })
        document.getElementById("country-selected").setAttribute("data-attr-currency", currencyCodeKeys[0])
      } else {
        console.log(country)
        const option = document.createElement("option");
        if (country.currencies === undefined) {
          console.log("undefined")
          return
        } else {

          // console.log(country.currencies)
          console.log(country.currencies)

          let currencyCodeKeys = Object.keys(country.currencies)
          console.log('currencyCodeKeys', currencyCodeKeys)
          // get the values from currencyCodeKeys list
          let keyCurrencyCode = currencyCodeKeys[0];
          console.log('keyCurrencyCode', keyCurrencyCode)
          currencyCodeKeys.forEach(key => {
            console.log('str', key)
          })
          option.setAttribute("data-attr-currency", currencyCodeKeys[0])
          
          console.log(currencyCodeKeys)
            // for (const [key, value] of Object.entries(currencyCode)) {
            //   console.log(`${key}: ${value}`);
            // }
            // console.log(currencyCode)
        }
        option.value = country.altSpellings[0];
        console.log(country.altSpellings[0])
        option.innerText = country.name.common;
        selectDestination.appendChild(option);
        // add attribute to the option

        console.log(option)
      }
  });

})


// loop through the list countries_data
// console.log(countries_data)

// console.log(country)
// const selectItem = function(e) {
//     value = e.target.countrySelect
//     console.log(value)
// }
// countrySelect.addEventListener("change", selectItem)
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
