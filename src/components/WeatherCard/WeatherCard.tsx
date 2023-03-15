import React from 'react'
import './WeatherCard.css'

interface WeatherCardProps {
  weatherData: WeatherData
}

interface WeatherData {
  temperature: number
  description: string
  country: string
  iconUrl: string
  weatherCode: string
}

function capitalizeFirstLetter (string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const WeatherCard: React.FC<WeatherCardProps> = (props: WeatherCardProps) => {
  return (
    <div id="weather-card">
      <img src={props.weatherData.iconUrl} alt="Weather icon"></img>
      <div id="headline-info">
        <p id='temperature'>{props.weatherData.temperature} °C</p>
        <p id='weather-description'>
          {capitalizeFirstLetter(props.weatherData.description)}
        </p>
      </div>
    </div>
  )
}

export default WeatherCard
