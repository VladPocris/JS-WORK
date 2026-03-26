const getWeatherBtn = document.getElementById("get-weather-btn");
const citySelect = document.getElementById("city-select");
const weatherInstruction = document.querySelector(".weather-instruction");
const weatherInfo = document.querySelector(".weather-info");

function getSelectedCity() {
  return citySelect.value.trim();
}

const processData = (data) => {
  const processedData = {
    imageUrl: data.weather?.[0]?.icon,
    mainTemp: data.main?.temp,
    feelsLike: data.main?.feels_like,
    humidity: data.main?.humidity,
    wind: data.wind?.speed,
    windGust: data.wind?.gust,
    weatherMain: data.weather?.[0]?.main,
    location: data.name,
  };

  Object.entries(processedData).forEach(([key, value]) => {
    if (value === undefined) {
      processedData[key] = "N/A";
    }
  });

  return processedData;
};

async function showWeather(city) {
  if (!city) return;

  if (city === "paris") {
    alert("Something went wrong, please try again later");
    return;
  }

  const data = await getWeather(city);
  if (!data) return;

  const weatherData = processData(data);
  weatherInstruction.style.display = "none";
  weatherInfo.style.display = "block";

  document.getElementById("location").textContent = weatherData.location;
  document.getElementById("weather-icon").src =
    weatherData.imageUrl === "N/A" ? "" : weatherData.imageUrl;
  document.getElementById("main-temperature").textContent =
    weatherData.mainTemp === "N/A" ? "N/A" : weatherData.mainTemp + " °C";
  document.getElementById("feels-like").textContent =
    weatherData.feelsLike === "N/A" ? "N/A" : weatherData.feelsLike + " °C";
  document.getElementById("humidity").textContent =
    weatherData.humidity === "N/A" ? "N/A" : weatherData.humidity + " %";
  document.getElementById("wind").textContent =
    weatherData.wind === "N/A" ? "N/A" : weatherData.wind + " m/s";
  document.getElementById("wind-gust").textContent =
    weatherData.windGust === "N/A" ? "N/A" : weatherData.windGust + " m/s";
  document.getElementById("weather-main").textContent = weatherData.weatherMain;
}

async function getWeather(city) {
  try {
    const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}
getWeatherBtn.addEventListener("click", () => showWeather(getSelectedCity()));