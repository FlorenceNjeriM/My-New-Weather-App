function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}
let apiKey= "2c694e6242tb2c1do6178043fab30107";
let apiUrl =
`https://api.shecodes.io/weather/v1/current?query=${city}&key=${2c694e6242tb2c1do6178043fab30107}`;

let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", handleSearchSubmit);
