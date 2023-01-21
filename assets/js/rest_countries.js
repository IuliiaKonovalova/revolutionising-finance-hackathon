// Fetch the list of countries from the API
fetch("https://restcountries.com/v3.1/all")
.then(response => response.json())
.then(data => {
  // Get the select element that will hold the list of countries
  const select = document.getElementById("country-select");
  // Iterate through the list of countries and add an option for each one
  data.forEach(country => {
    const option = document.createElement("option");
    option.value = country.alpha2Code;
    option.innerText = country.name.common;
    select.appendChild(option);
  });
  const selectDestination = document.getElementById("destination-select");
    // Iterate through the list of countries and add an option for each one
    data.forEach(country => {
      const option = document.createElement("option");
      option.value = country.alpha2Code;
      option.innerText = country.name.common;
      selectDestination.appendChild(option);
  });
});



