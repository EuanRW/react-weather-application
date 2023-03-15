import React from 'react'
import './WeatherCard.css'
import type { WeatherData } from '../../types/WeatherData'

interface WeatherCardProps {
  weatherData: WeatherData
}

function capitalizeFirstLetter (string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const WeatherCard: React.FC<WeatherCardProps> = (props: WeatherCardProps) => {
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const d = new Date()
  const day = weekday[d.getDay()]

  return (
    <div id="weather-card">
      <div id='day-section'>{day}</div>
      <div id="header-section">
        <img src={props.weatherData.iconUrl} alt="Weather icon"></img>
        <div id="headline-info">
          <p id="temperature">{props.weatherData.temperature} °C</p>
          <p id="weather-description">
            {capitalizeFirstLetter(props.weatherData.description)}
          </p>
        </div>
      </div>
      <div id="extra-details-section">Feels like: {props.weatherData.tempFeelsLike} °C | Min: {props.weatherData.tempMin} °C | Max: {props.weatherData.tempMax} °C</div>
    </div>
  )
}

export default WeatherCard
