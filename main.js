async function getWeather(city) {
  const weatherRequest = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0aff92f8c4978182c5d1d5b40cd8d71e`,
    { mode: "cors" }
  );

  return weatherRequest;
}

async function processWeather(city) {
  const weatherResponse = await (await getWeather(city)).json();
  return weatherResponse;
}

function CityForm() {
  const form = document.createElement("form");
  const city = document.createElement("input");

  form.addEventListener("keypress", e => {
    if (e.keyCode === 13) { 
      event.preventDefault();
	 processWeather(city.value)
     console.log("enter pressed")
    }
  });

  form.appendChild(city);
  document.body.appendChild(form)
}