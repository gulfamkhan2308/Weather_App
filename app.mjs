let getWeather = () => {
    let cityName = document.getElementById("cityName").value;
   // Make a request for a user with a given ID
axios.get(`https://api.openweathermap.org/data/2.5/weather?unit=matric&appid=752000152e9b5eb2f5e0b8162973cb40&q=${cityName}`)
.then(function (response) {
  // handle success
  console.log("response is success");
  console.log(response.data);
})
.catch(function (error) {
  // handle error
  console.log(error);
}) 
}


