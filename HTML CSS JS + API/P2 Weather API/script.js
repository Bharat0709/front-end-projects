"use strict";
const LandingScreen = document.querySelector(".LandingScreen");
const GetStarted = document.querySelector(".GetStarted");
const Screen1 = document.querySelector(".Weather-UI");
const CurrentTemp = document.querySelector(".Temp-Condition");
const CurrentDate = document.querySelector(".Date");
const sunrise = document.querySelector("#SunRise");
const sunset = document.querySelector("#SunSet");
const maxtemp = document.querySelector("#maxtemp");
const mintemp = document.querySelector("#mintemp");
const pressure = document.querySelector("#pressure");
const windspeed = document.querySelector("#windspeed");
const rain = document.querySelector("#rain");
const snowfall = document.querySelector("#snowfall");
const humidity = document.querySelector("#humidity");
const search = document.querySelector(".LocationSearch");

GetStarted.addEventListener("click", function () {
  LandingScreen.style.display = "none";
  Screen1.style.display = "flex";
  weather();
  RenderDate();
});

const RenderDate = function (data) {
  const CurrentDateandtime = new Date();
  const html = `<p class="CurrentDate">${CurrentDateandtime.toDateString()}</p>
  `;
  CurrentDate.insertAdjacentHTML("afterbegin", html);
};

const RenderCurrentTemp = function (data) {
  const html = `
  <p class="CurrentTemperature">${data.data[0].app_temp} <sup class="Degree"> °C </sup></p>
  <p class="CurrentWeatherTy">${data.data[0].weather.description}</p>
    `;
  CurrentTemp.insertAdjacentHTML("afterbegin", html);
};

const RenderVisibility = function (data) {
  const html = `
  <p class="stat-Amount">${data.data[0].vis}</p>`;
  sunrise.insertAdjacentHTML("afterbegin", html);
};

const RenderSunSet = function (data) {
  const html = `
  <p class="stat-Amount">${data.daily.sunset[0].slice(-5)}</p>`;
  sunset.insertAdjacentHTML("afterbegin", html);
};

const RenderMaxTemp = function (data) {
  const html = `
  <p class="stat-Amount">${data.data[0].dewpt} %</p>`;
  maxtemp.insertAdjacentHTML("afterbegin", html);
};

const RenderMinTemp = function (data) {
  const html = `
  <p class="stat-Amount">${data.data[0].clouds} % </p>`;
  mintemp.insertAdjacentHTML("afterbegin", html);
};

const RenderWindSpeed = function (data) {
  const html = `
  <p class="stat-Amount">${data.data[0].wind_spd} km/h</p>`;
  windspeed.insertAdjacentHTML("afterbegin", html);
};

const RenderPressure = function (data) {
  const html = `
  <p class="stat-Amount">${data.data[0].pres} mb </p>`;
  pressure.insertAdjacentHTML("afterbegin", html);
};

const RenderRain = function (data) {
  const html = `
  <p class="stat-Amount">${data.data[0].precip} mm </p>`;
  rain.insertAdjacentHTML("afterbegin", html);
};

const RenderSnowFall = function (data) {
  const html = `
  <p class="stat-Amount">${data.data[0].snow} mm/hr </p>`;
  snowfall.insertAdjacentHTML("afterbegin", html);
};

const RenderHumidity = function (data) {
  const html = `
  <p class="stat-Amount">${data.data[0].rh} % </p>`;
  humidity.insertAdjacentHTML("beforebegin", html);
};

const weather = async function () {
  const getposition = function () {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const positiongathered = await getposition();
  const { latitude: Lat, longitude: Lan } = positiongathered.coords;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "64e92ea2damsh3b7129560575c1dp1654f5jsn00952b2dfce4",
      "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
    },
  };

  const response = await fetch(
    `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=${Lat}&lon=${Lan}`,
    options
  );

  const responseOut = await response.json();
  console.log(responseOut);

  search.value = `${responseOut.city_name}`;
  RenderCurrentTemp(responseOut);
  RenderRain(responseOut);
  RenderSnowFall(responseOut);
  RenderVisibility(responseOut);
  RenderPressure(responseOut);
  RenderWindSpeed(responseOut);
  RenderHumidity(responseOut);
  RenderMaxTemp(responseOut);
  RenderMinTemp(responseOut);
};
