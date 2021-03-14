import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Weather.css'

const Weather = () => {
  const [where, setWhere] = useState('Unknown')
  const [temperature, setTemperature] = useState('')
  const [conditions, setConditions] = useState('')
  const [iconName, setIconName] = useState('')

  useEffect(() => {
    const getWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=03032,us&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      const weather = await response.json()
      if (weather) {
        setWhere(weather.name)
        setTemperature(convertKelvinToCelsius(weather.main?.temp))
        if (weather.weather) {
          setIconName(weather.weather[0]?.main)
          setConditions(weather.weather[0]?.description)
        }
      }
    }
    getWeather()

  }, [])

  return (
    <div className="weather">
      <span className="weather-icon">
        <FontAwesomeIcon icon={getIcon(iconName)} />
      </span>
      <span className="weather-temperature">{temperature}℃</span>
      &nbsp;
      <span className="weather-conditions">
        {conditions} in {where}
      </span>
    </div>
  )
}

const convertKelvinToCelsius = (kelvin) => {
  return Math.round(kelvin - 273.15)
}

const getIcon = (name) => {
  switch (name) {
    case 'Thunderstorm':
      return 'bolt'
    case 'Drizzle':
      return 'cloud-rain'
    case 'Rain':
      return 'cloud-showers-heavy'
    case 'Snow':
      return 'snowflake'
    case 'Smoke':
      return 'smog'
    case 'Mist':
    case 'Haze':
    case 'Dust':
    case 'Ash':
    case 'Squall':
    case 'Tornado':
      return 'poo-storm'
    case 'Clear':
      return 'sun'
    case 'Clouds':
      return 'cloud'
    default:
      return 'question'
  }
}



export default Weather
