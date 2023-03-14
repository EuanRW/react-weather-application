import React from 'react'
import './WeatherCard.css'

interface WeatherCardProps {
  weatherData: WeatherData
}

interface WeatherData {
  temperature: number
  description: string
}

function capitalizeFirstLetter (string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const WeatherCard: React.FC<WeatherCardProps> = (props: WeatherCardProps) => {
  return (
    <div id='weather-card'>
      <p>Current temperature: {props.weatherData.temperature} °C</p>
      <p>Current weather: {capitalizeFirstLetter(props.weatherData.description)}</p>
    </div>
  )
}

export default WeatherCard
