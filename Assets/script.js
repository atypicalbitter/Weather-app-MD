$(document).ready(function () {
    const apiKey = 'df8762169cc4e5c500ae5bd0e9fc3a16';
    const searchForm = $('#search-form');
    const searchInput = $('#search-input');
    const historyList = $('#history');
    const todaySection = $('#today');
    const forecastSection = $('#forecast');

  

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
  
    function getForecast(lat, lon) {
      const queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=df8762169cc4e5c500ae5bd0e9fc3a16`;
  
      $.ajax({
          url: queryURL,
          method: 'GET',
      }).then(function (response) {
          const forecastData = response.list; 
  

          let forecastHTML = '<h2>5-Day Forecast:</h2><div class="row">';
  
          for (let i = 0; i < forecastData.length; i += 8) {
              const forecastDate = dayjs.unix(forecastData[i].dt).format('YYYY-MM-DD');
              const iconURL = `https://openweathermap.org/img/w/${forecastData[i].weather[0].icon}.png`;
  
              forecastHTML += `
                  <div class="col-md-2">
                      <p>${forecastDate}</p>
                      <img src="${iconURL}" alt="Weather Icon">
                      <p>Temp: ${forecastData[i].main.temp} °C</p>
                      <p>Humidity: ${forecastData[i].main.humidity}%</p>
                  </div>
              `;
          }
  
          forecastHTML += '</div>';
          forecastSection.html(forecastHTML);
      });
  }
  

    searchForm.on('submit', function (event) {
      event.preventDefault();
  
      const cityName = searchInput.val().trim();
  
      if (cityName !== '') {
        getWeather(cityName);
        searchInput.val('');
  

        saveToHistory(cityName);
      }
    });
  
    function saveToHistory(city) {
      const historyItem = $(`<a href="#" class="list-group-item list-group-item-action">${city}</a>`);
      historyList.prepend(historyItem);
   

      localStorage.setItem('lastCity', city);
   

      historyItem.on('click', function () {
         const selectedCity = $(this).text();
         getWeather(selectedCity);
      });
   }
   
  });
  
 

