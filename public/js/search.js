const input = document.querySelector("#search-input");
const button = document.querySelector("#search-button");
const urlSearchWeather = "http://localhost:3000/weather/";

button.addEventListener("click", async () => {
  if (input.value !== "") {
    const url = urlSearchWeather + input.value;
    const result = await fetch(url).then((response) => response.json());
    renderWeather(result);
  }
});
