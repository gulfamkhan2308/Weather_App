let getWeather = () => {
    let cityName = document.getElementById("cityName").value;
   // Make a request for a user with a given ID
   let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=API_KEY&q=${cityName}`
axios.get(url)
.then(function (response) {
  // handle success
  console.log("response is success");
  console.log(response.data);
  document.getElementById("weather").innerHTML = 
  
  `<h1>${response.data.name}</h1>;
  <h2>temp: ${response.data.main.temp}°C</h2> 
  <h2> feels_like:  ${response.data.main.feels_like}°C</h2>
  <h3>weather:  ${response.data.weather[0].description}</h3>
  <h3>humidity: ${response.data.main.humidity}%</h3>
  <h3>wind: ${response.data.wind.speed}m/s</h3>
  <h3>pressure: ${response.data.main.pressure}hPa</h3>
  <h3>sea_level: ${response.data.main.sea_level}m</h3>
  <h3>grnd_level:  ${response.data.main.grnd_level}m</h3>
  <h3>temp_max:  ${response.data.main.temp_max}°C</h3>
  <h3> temp_min: ${response.data.main.temp_min}°C</h3>
   `;    
})
.catch(function (error) {
  // handle error
  console.log(error);
}) 
}


