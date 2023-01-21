const countrySelect = document.getElementById("countries-select");
const selectDestination = document.getElementById("destination-select");
const currencyFrom = document.getElementById("currency-from");
const currencyTo = document.getElementById("currency-to");
let selectedOption;
let selectedOptionDestination;

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
  // Iterate through the list of countries and add an option for each one
  data.forEach(country => {
    const option = document.createElement("option");
    if (country.name.common === "United Kingdom") {
      let currencyCodeKeys = Object.keys(country.currencies)
      countrySelect.setAttribute("data-attr-currency", currencyCodeKeys[0])
      currencyFrom.innerHTML = currencyCodeKeys[0]
    } else {
    option.value = country.altSpellings[0]
    option.innerText = country.name.common;
    if (country.currencies === undefined) {
      console.log("undefined")
      return
    } else {
        let currencyCodeKeys = Object.keys(country.currencies)
        // get the values from currencyCodeKeys list
        option.setAttribute("data-attr-currency", currencyCodeKeys[0])
      }
      countrySelect.appendChild(option);
    }
  });
    // Iterate through the list of countries and add an option for each one
    data.forEach(country => {
    if (country.name.common ==="United Kingdom") {
      document.getElementById("country-from-selected").value = country.altSpellings[0]
      document.getElementById("country-from-selected").innerText = country.name.common
      let currencyCodeKeys = Object.keys(country.currencies)
      document.getElementById("country-from-selected").setAttribute("data-attr-currency", currencyCodeKeys[0])
      currencyTo.innerHTML = currencyCodeKeys[0]
      document.getElementById("country-to-selected").value = country.altSpellings[0]
      document.getElementById("country-to-selected").innerText = country.name.common
      document.getElementById("country-to-selected").setAttribute("data-attr-currency", currencyCodeKeys[0])
    } else {
      const option = document.createElement("option");
<<<<<<< HEAD
      if (country.currencies === undefined) {
        console.log("undefined")
        return
      } else {
        let currencyCodeKeys = Object.keys(country.currencies)
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
=======
      option.value = country.altSpellings[0];
      option.innerText = country.name.common;
      if (country.name.common === "United Kingdom") {
        // set selected option
        option.selected = true;
        console.log('selected')
>>>>>>> eced284 (alter code for targeting data in api response)
      }
  });
})

// target selected option in countrySelect
countrySelect.addEventListener("change", (event) => {
  selectedOption = event.target.value;
  console.log(selectedOption)
  // display the currency code
  currencyFrom.innerHTML = event.target.options[event.target.selectedIndex].getAttribute("data-attr-currency");
});

// target selected option in selectDestination
selectDestination.addEventListener("change", (event) => {
  selectedOptionDestination = event.target.value;
  console.log(selectedOptionDestination);
  // display the currency code
  currencyTo.innerHTML = event.target.options[event.target.selectedIndex].getAttribute("data-attr-currency");
});
