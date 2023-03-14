import React, { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import WeatherCard from '../WeatherCard/WeatherCard'
import LocationInput from '../LocationInput/LocationInput'
import LocationCard from '../LocationCard/LocationCard'

import '../../globals.css'
import './App.css'

let apiKey = ''
if (process.env.REACT_APP_WEATHER_API_KEY !== null && process.env.REACT_APP_WEATHER_API_KEY !== undefined) {
  apiKey = process.env.REACT_APP_WEATHER_API_KEY
}

interface WeatherData {
  temperature: number
  description: string
  country: string
}

function App (): ReactElement {
  const [location, setLocation] = useState<string>('Bristol')
  const [locationNameFromAPI, setLocationNameFromAPI] = useState<string | null>(null)
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchWeatherData = async (): Promise<any> => {
    try {
      const coordinatesResponse = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(location)}&limit=1&appid=${apiKey}`
      )
      const coordinatesData = await coordinatesResponse.json()
      console.log(coordinatesData)
      const name: string = coordinatesData[0].name
      const lat: number = coordinatesData[0].lat
      const lon: number = coordinatesData[0].lon

      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      )
      const weatherData = await weatherResponse.json()
      console.log(weatherData)
      const temperature = weatherData.main.temp
      const description = weatherData.weather[0].description
      const country = weatherData.sys.country

      setLocationNameFromAPI(name)
      setWeatherData({ temperature, description, country })
    } catch (error: any) {
      setError(error.message)
    }
  }

  useEffect(() => {
    setLoading(true)
    void fetchWeatherData()
    setLoading(false)
  }, [location])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error !== null) {
    return <div>Error: {error}</div>
  }

  if (weatherData == null) {
    return <div>No data.</div>
  }

  return (
    <div id='app-container'>
      <div id='weather-container'>
        <LocationInput setLocation={setLocation} location={location}></LocationInput>
        {weatherData !== null && <WeatherCard weatherData={weatherData} />}
      </div>
      {locationNameFromAPI !== null &&
        <LocationCard location={locationNameFromAPI + ', ' + weatherData.country}></LocationCard>
      }
    </div>
  )
}

export default App
