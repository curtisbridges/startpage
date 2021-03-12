import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Weather.css'

const Weather = () => {
  return (
    <div className="weather">
      <span className="weather-icon">
        <FontAwesomeIcon icon="cloud" />
      </span>
      <span className="weather-temperature">9℃</span>
      &nbsp;
      <span className="weather-conditions">few clouds</span>
    </div>
  )
}

export default Weather
