const btn = document.querySelector('#search-button');
const input = document.querySelector('#city-input');
const cityName = document.querySelector('#city-name');
const temperature = document.querySelector('#city-temp');
const cityTime = document.querySelector('#city-time');
const humidity = document.querySelector('#city-humidity');
const wind = document.querySelector('#city-wind');

const img = document.querySelector('#icon');

async function getData(cityName) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=946b317146ae419793c131016251201&q=${cityName}&aqi=yes`);
    return await promise.json();
}

btn.addEventListener('click', async () => {
    //   console.log(input.value);
    const value = input.value;
    const result = await getData(value);
    console.log(result);
    cityName.innerText = `${result.location.name},${result.location.country} `;
    temperature.innerText = `Temperature : ${result.current.temp_c}°C`;
    cityTime.innerText = `Local time : ${result.location.localtime}`;
    humidity.innerText = `Humidity : ${result.current.humidity}`;
    wind.innerText = `Wind : ${result.current.wind_kph} km/h`;
    img.src = result.current.condition.icon;
});


