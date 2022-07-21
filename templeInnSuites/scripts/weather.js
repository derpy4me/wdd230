const weatherForecast = document.querySelector('.weatherForecast');

const createForecastElement = (dataArray) => {
  dataArray.forEach((data) => {
    const time = convertTime(data.dt).toLocaleDateString('en-US', {
      weekday: 'long',
    });
    const weatherImage = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const element = `
    <div class="weather paddingXhalf">
      <img src="${weatherImage}" alt="${data.weather[0].description}" width="60">
      <h3>${time}</h3>
      <p class="weatherDescription textSmall"><strong>${data.weather[0].main}</strong></p>
      <p class="textSmall"><strong>Temperature:</strong> ${data.temp.day} ˚F</p>
      <p class="textSmall"><strong>Humidity:</strong> ${data.humidity}%</p>
  `;
    weatherForecast.insertAdjacentHTML('beforeend', element);
  });
};

const showAlert = (alerts) => {
  const alertArea = document.querySelector('.weatherAlert');
  const start = convertTime(alerts.start);
  const end = convertTime(alerts.end);
  const startDay = start.toLocaleDateString('en-US', { weekday: 'long' });
  const endDay = end.toLocaleDateString('en-US', { weekday: 'long' });
  const startNum = start.getDate();
  const endNum = end.getDate();
  alertArea.classList.remove('hidden');
  element = `
    <p><strong>${alerts.event}</strong></p>
    <p>${startDay} ${startNum} - ${endDay} ${endNum}
  `;
  alertArea.innerHTML = element;
};

const convertTime = (seconds) => {
  var time = new Date(1970, 0, 1); // Epoch
  time.setSeconds(seconds);
  return time;
};

const fourDayForecast = (weatherData) => {
  let forecast = [];
  forecast.push(weatherData.daily[0]);
  forecast.push(weatherData.daily[1]);
  forecast.push(weatherData.daily[2]);
  forecast.push(weatherData.daily[3]);
  createForecastElement(forecast);

  if (weatherData.alerts) {
    showAlert(weatherData.alerts);
  }
};

const getWeather = () => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch(
    'https://api.openweathermap.org/data/2.5/onecall?appid=7f51af0e3c6ba0cbac6fd1bfa5442d4b&exclude=minutely,hourly&units=imperial&lat=8.53&lon=-80.78',
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .then((data) => fourDayForecast(data))
};

getWeather();
