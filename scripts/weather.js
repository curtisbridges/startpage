window.onload = async (event) => {
    const weatherElement = document.getElementById('weather')

    const API_KEY = '7e98539d1b75c29c2caa8f6ccc1d2315';
    // const TARGET_CITY = '5089178';
    // const TARGET_CITY = 'auburn,us';
    const lat = 42.990372;
    const lon = -71.343933;

    // const API_URI = `http://api.openweathermap.org/data/2.5/weather?q=${TARGET_CITY}&appid=${API_KEY}`;
    const API_URI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const response = await fetch(API_URI);
    const weatherJSON = await response.json();
    const weather = weatherJSON.weather[0];
    const stats = weatherJSON.main;

    weatherElement.innerHTML = `Today in ${weatherJSON.name}: \
        ${convertFromKelvin(stats.temp)} and ${weather.main} \
        with a high of ${convertFromKelvin(stats.temp_max)} \
        and low of ${convertFromKelvin(stats.temp_min)}.`
}

function convertFromKelvin(kelvin) {
    if (kelvin == null) return null;
    return ((kelvin - 273.15) * (9.0 / 5.0) + 32).toFixed(0);
}
