const API_KEY = `4536d48f80b064bfe04d584430e25189`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");
// const API = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const getWeather = async (city) => {
  weather.innerHTML = `<h2> Loading... <h2>`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return showWeather(data);
};

const showWeather = (data) => {
  if (data.cod == "404") {
    weather.innerHTML = `<h2> City Not Found <h2>`;
    return;
  }
  weather.innerHTML = `
    <h5>${data.name}</h5>

    <div>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" />
    </div>

    <div>
      <p>Temperature</p>
      <h1>${data.main.temp}</h1>
      <p>${data.weather[0].main}</p>
    </div>
    <div>

      <div>
        <h3>${data.main.feels_like}</h3>
        <p>Feel Like</p>
      </div>

      <div>
        <h3>${data.main.humidity}</h3>
        <p>Humidity</p>
      </div>
      
    </div>
    
  </div>
    `;
};

form.addEventListener("submit", function (event) {
  getWeather(search.value);
  event.preventDefault();
});

// <h4> ${data.weather[0].main} </h4>
