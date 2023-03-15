import React, { useEffect, useState } from 'react'
import thunderstorm from './WeatherImages/thunder.webp'
import rain from './WeatherImages/rain.jpg'
import drizzle from './WeatherImages/drizzle.jpg'
import snow from './WeatherImages/snow.jpg'
import mist from './WeatherImages/mist.jpg'
import clear from './WeatherImages/clear.jpg'
import clouds from './WeatherImages/clouds.jpg'
import './LocationCard.css'

interface LocationCardProps {
  location: string
  weatherCode: string
}

const LocationCard: React.FC<LocationCardProps> = (props: LocationCardProps) => {
  const [weatherImage, setWeatherImage] = useState<JSX.Element | null>(null)

  useEffect(() => {
    let weatherImageElement: JSX.Element = <img className='weather-image' />
    if (String(props.weatherCode).charAt(0) === '2') {
      weatherImageElement = <img className='weather-image' src={thunderstorm} alt="Thunderstorm image." />
    } else if (String(props.weatherCode).charAt(0) === '3') {
      weatherImageElement = <img className='weather-image' src={drizzle} alt="Drizzle image." />
    } else if (String(props.weatherCode).charAt(0) === '5') {
      weatherImageElement = <img className='weather-image' src={rain} alt="Rain image." />
    } else if (String(props.weatherCode).charAt(0) === '6') {
      weatherImageElement = <img className='weather-image' src={snow} alt="Snow image." />
    } else if (String(props.weatherCode).charAt(0) === '7') {
      weatherImageElement = <img className='weather-image' src={mist} alt="Mist image." />
    } else if (String(props.weatherCode) === '800') {
      weatherImageElement = <img className='weather-image' src={clear} alt="Clear image." />
    } else if (String(props.weatherCode).substring(0, 2) === '80') {
      weatherImageElement = <img className='weather-image' src={clouds} alt="Clouds image." />
    }

    setWeatherImage(weatherImageElement)
  }, [props.weatherCode])

  return (
    <div id='location-card'>
      <p id='location'>{props.location}</p>
      {weatherImage}
    </div>
  )
}

export default LocationCard
