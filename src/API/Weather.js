async function getWeather(city) {
  const weatherRequest = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0aff92f8c4978182c5d1d5b40cd8d71e`,
    { mode: "cors" }
  );

  return weatherRequest;
}

export default async function processWeather(city) {
  const weatherResponse = await (await getWeather(city)).json();
  return weatherResponse;
}

//TO use add and  event listener to the form (Enter key) and then call the processWeather function
