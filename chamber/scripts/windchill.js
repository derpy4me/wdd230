const temp = document.querySelector("#temp");
const windSpeed = document.querySelector("#windSpeed");
const windChillspan = document.querySelector("#windChill");
const weatherIcon = document.querySelector("#weatherIcon");
const weatherDiv = document.querySelector(".weather");
const description = document.querySelector("#description");
const weatherDetails = document.querySelector(".weatherDetails")

const city = "Buffalo, wy, us";
const identification = "7f51af0e3c6ba0cbac6fd1bfa5442d4b";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${identification}&units=imperial`;

const displayWeather = (data) => {
  weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  weatherIcon.alt = data.weather[0].description;
  temp.innerHTML = data.main.temp.toFixed(0);
  description.innerHTML = data.weather[0].main;
  windSpeed.innerHTML = data.wind.speed.toFixed(0)
  displayWindChill(data.main.temp, data.wind.speed)
};

async function fetchWeather() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      console.info(JSON.stringify(data, null, 2));
      displayWeather(data)
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

fetchWeather();

function windChill(temp, windSpeed) {
  if (temp > 50 && windSpeed < 3) {
    return 0
  }
  return Math.round(
      35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16
    );
}

function displayWindChill(temp, windSpeed) {
  windChill = windChill(temp, windSpeed)
  if (windChill < 1) return

  const pTitle = document.createElement('p')
  const pChill = document.createElement('p')
  const spanChill = document.createElement('span')
  pTitle.innerText = 'Wind Chill: '
  spanChill.id = 'windChill'
  spanChill.innerHTML = windChill
  pChill.append(spanChill)
  pChill.append(" ˚F")
  weatherDetails.append(pTitle)
  weatherDetails.append(pChill)

  // debugger
}
  
