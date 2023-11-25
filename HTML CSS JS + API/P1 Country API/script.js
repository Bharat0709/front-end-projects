"use strict";

const searchbutton = document.querySelector(".search");
const SearchInput = document.querySelector(".search-input");
const container = document.querySelector(".cards-container");
const NContainer = document.querySelector(".neighbouring-countainer");
const mylocation = document.querySelector(".where");

mylocation.addEventListener("click", function () {
  WhereAmI();
});

searchbutton.addEventListener("click", function (event) {
  const Inputvalue = SearchInput.value;
  SearchInput.value = "";
  console.log(Inputvalue);
  getcountrydata(Inputvalue);
});

const renderloc = function (msgnew) {
  const html = `
    <p class="error">${msgnew}</p>
    `;

  container.insertAdjacentHTML("beforebegin", html);
};

const renderErr = function (msg) {
  // container.insertAdjacentText("beforeend", `${msg}`);
  alert(msg);
};

const renderHtml = function (data) {
  const html = `
    <div class="country-card">
      <div class="flag-image">
        <img class="flag-image"
          src="${data.flags.png}"
        />
      </div>
      <div class="Country-name-capital">
        <p id="name">${data.name.common}</p>
        <p class="Country-capital">${data.capital}</p>
      </div>
      <p class="population">👪 ${data.population.toFixed(1)} People</p>
      <p class="Language">🗺️ ${data.area.toFixed(1)} Sq Km</p>
      <p id="Currency">⏳ ${data.timezones[0]}</p>
    </div>
    `;
  container.insertAdjacentHTML("afterbegin", html);
};

const renderHtml2 = function (data) {
  console.log(data);
  const html = `
    <div class="neighbouring-countries">
    <p class="para">Neighbouring Country</p>
    <div class="country-card">
      <div class="flag-image">
        <img class="flag-image"
          src="${data.flags.png}"
        />
      </div>
      <div class="Country-name-capital">
        <p id="name">${data.name.common}</p>
        <p class="Country-capital">${data.capital}</p>
      </div>
      <p class="population">👪 ${data.population.toFixed(1)} People</p>
      <p class="Language">🗺️ ${data.area.toFixed(1)} Sq Km</p>
      <p id="Currency">⏳ ${data.timezones[0]}</p>
    </div>
    </div>
    `;
  container.insertAdjacentHTML("afterbegin", html);
};

const getposition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const getJSON = function (url, errMsg = `something went wrong`) {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errMsg} ${response.status}`);
    return response.json();
  });
};

const getcountrydata = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country Not found")
    .then((data) => {
      renderHtml(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error(`No neighbours found`);
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Country Not found"
      );
    })
    .then((data) => renderHtml2(data[0]))
    .catch((err) => {
      console.log(`${err}`);
      renderErr(`something went wrong ${err.message}`);
    });
};

const WhereAmI = async function () {
  try {
    const positiongathered = await getposition();
    const { latitude: Lat, longitude: Lan } = positiongathered.coords;

    const GetCountryName = await fetch(
      `https://geocode.xyz/${Lat},${Lan}?geoit=json`
    );
    if (!GetCountryName.ok) {
      throw new Error(
        `Problen Getting your Location (${GetCountryName.status} Reload and try again!!`
      );
    }
    const datagathered = await GetCountryName.json();
    const LocatedArea = `You are in ${datagathered.staddress}, ${datagathered.state} ( ${datagathered.postal})`;
    renderloc(LocatedArea);

    const LoadCountry = await fetch(
      `https://restcountries.com/v3.1/name/${datagathered.country}`
    );
    if (!LoadCountry.ok) {
      throw new Error(`Problem Getting Country `);
    }
    const data = await LoadCountry.json();
    renderHtml(data[0]);
  } catch (err) {
    alert(err);
  }
};


const WhereAmI = async function () {
  try {
    // const positiongathered = await getposition();
    // const { latitude: Lat, longitude: Lan } = positiongathered.coords;

    const GetCountryName = await fetch(
      `https://public-api.tracker.gg/v2/apex/standard/search`
    );
    // if (!GetCountryName.ok) {
    //   throw new Error(
    //     `Problen Getting your Location (${GetCountryName.status} Reload and try again!!`
    //   );
    // }
    const datagathered = await GetCountryName.json();
    const LocatedArea = `You are in ${datagathered.staddress}, ${datagathered.state} ( ${datagathered.postal})`;
    // renderloc(LocatedArea);

    const LoadCountry = await fetch(
      `https://restcountries.com/v3.1/name/${datagathered.country}`
    );
    if (!LoadCountry.ok) {
      throw new Error(`Problem Getting Country `);
    }
    const data = await LoadCountry.json();
    renderHtml(data[0]);
  } catch (err) {
    alert(err);
  }
};

// const whereAmi = function (Lat, Lan) {
//   getposition()
//     .then((pos) => {
//       const { latitude: Lat, longitude: Lan } = pos.coords;
//       return fetch(`https://geocode.xyz/${Lat},${Lan}?geoit=json`);
//     })

//     .then((res) => {
//       if (!res.ok) throw new Error(`problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       renderloc(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`country not found (${res.status})`);
//       return res.json();
//     })
//     .then((data) => renderHtml(data[0]))
//     .catch((err) => renderErr(`Reload and Try again ${err.message}`));
// };
