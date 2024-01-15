$(document).ready(function () {
    const apiKey = 'df8762169cc4e5c500ae5bd0e9fc3a16';
    const searchForm = $('#search-form');
    const searchInput = $('#search-input');
    const historyList = $('#history');
    const todaySection = $('#today');
    const forecastSection = $('#forecast');
}

function getWeather(city) {
        const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=df8762169cc4e5c500ae5bd0e9fc3a16&units=metric`;

        $.ajax({
            url: queryURL,
            method: 'GET',
          }).then(function (response) {
            const cityWeather = response;
            const currentDate = dayjs().format('YYYY-MM-DD');
            const iconURL = `https://openweathermap.org/img/w/${cityWeather.weather[0].icon}.png`;

            const currentWeatherHTML = `
            <h2>${cityWeather.name} (${currentDate}) <img src="${iconURL}" alt="Weather Icon"></h2>
            <p>Temperature: ${cityWeather.main.temp} °C</p>
            <p>Humidity: ${cityWeather.main.humidity}%</p>
            <p>Wind Speed: ${cityWeather.wind.speed} m/s</p>
          `;
          todaySection.html(currentWeatherHTML);
          
          const lat = cityWeather.coord.lat;
          const lon = cityWeather.coord.lon;
          getForecast(lat, lon);
        });
      }