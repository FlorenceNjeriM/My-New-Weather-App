function updateWeather(response) {
  temperatureElement = document.querySelector("#temperature");
  temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = temperature;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "2c694e6242tb2c1do6178043fab30107";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");
