const temp = document.querySelector("#temp").innerHTML;
const windSpeed = document.querySelector("#windSpeed").innerHTML;
const windChill = document.querySelector("#windChill");

if (temp < 50 && windSpeed > 3) {
  windChill.innerHTML = Math.round(35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16);
}
