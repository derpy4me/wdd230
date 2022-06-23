const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const city = "Fairbanks, ak, us";
const identification = "7f51af0e3c6ba0cbac6fd1bfa5442d4b";

// Docs: https://openweathermap.org/current
// Weather Conditions: https://openweathermap.org/weather-conditions
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${identification}&units=imperial`;

const displayResult = (data) => {
  weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  weatherIcon.alt = data.weather[0].description;
  currentTemp.innerHTML = data.main.temp.toFixed(0);
  captionDesc.innerHTML = data.weather[0].main;
};

async function weatherFetch() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      // console.info(JSON.stringify(data, null, 2));
      displayResult(data)
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

weatherFetch();
