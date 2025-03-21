function getWeatherData(lat, lon, API_key) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Weather Data:", JSON.stringify(data, null, 2)); // Pretty print
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}

getWeatherData(28.679079, 77.069710, "8c944e36f2f50d721821f55b0940f758");
