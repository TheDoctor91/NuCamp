async function fetchWeather() {
  const apiKey = process.env.OPEN_WEATHER_API_KEY;
  const city = "Houston";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();

    // Log to see the data
    console.log(data);

    // Call the function and pass the data
    displayWeather(data);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}
fetchWeather();

function displayWeather(weatherData) {
  const temp = weatherData.main.temp;
  const description = weatherData.weather[0].description;
  const iconCode = weatherData.weather[0].icon;

  // Create an image element
  const imgElement = document.createElement("img");
  imgElement.src = `https://openweathermap.org/img/w/${iconCode}.png`;
  console.log(imgElement.src);

  // Append to a container on the page
  const container = document.getElementById("weatherContainer");
  container.appendChild(imgElement);

  // Create text elements for temperature and description
  const tempElement = document.createElement("p");
  tempElement.textContent = `Temperature: ${temp}\u00B0F`;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = `Condition: ${description}`;

  container.appendChild(tempElement);
  container.appendChild(descriptionElement);
}

