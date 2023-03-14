import React from 'react'

interface LocationCardProps {
  location: string
}

const LocationCard: React.FC<LocationCardProps> = (props: LocationCardProps) => {
  return (
    <div id='location-card'>
      {props.location}
    </div>
  )
}

export default LocationCard
