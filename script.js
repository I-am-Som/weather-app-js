async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const weatherContainer = document.getElementById('weatherData');

  if (!city) {
    weatherContainer.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  try {
    const apiKey = '8c944e36f2f50d721821f55b0940f758'; // Replace with your OpenWeatherMap API key
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();

    if (data.cod === 200) {
      weatherContainer.innerHTML = `
        <h2 id="cityName">Weather in ${data.name}, ${data.sys.country}</h2>
        <p id="weatherDescription"><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p id="temperature"><strong>Temperature:</strong> ${Math.round((data.main.temp - 273)*100)/100}°C</p>
        <p id="humidity"><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p id="pressure"><strong>Pressure:</strong> ${data.main.pressure} hPa</p>
        <p id="windSpeed"><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        <p id="visibility"><strong>Visibility:</strong> ${data.visibility / 1000} km</p>
        <p id="sunrise"><strong>Sunrise:</strong> ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
        <p id="sunset"><strong>Sunset:</strong> ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
      `;
    } else {
      weatherContainer.innerHTML = `<p>Error: ${data.message}</p>`;
    }
  } catch (error) {
    weatherContainer.innerHTML = '<p>Failed to fetch data. Please try again.</p>';
  }
}
