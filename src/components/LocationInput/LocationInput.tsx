import React, { useState } from 'react'
import { FaSearch, FaCaretRight } from 'react-icons/fa'
import './LocationInput.css'

interface LocationInputProps {
  setLocation: (location: string) => void
  location: string
}

const LocationInput: React.FC<LocationInputProps> = (props: LocationInputProps) => {
  const [inputValue, setInputValue] = useState<string>(props.location)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleSearchClick()
    }
  }

  const handleSearchClick = (): void => {
    props.setLocation(inputValue)
    setInputValue('')
  }

  return (
    <div id='location-input'>
      <span>
        <FaSearch id='search-icon'/>
      </span>
      <input
        type="text"
        placeholder="Enter location"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleEnterPress}
      />
      <FaCaretRight id='enter-icon' onClick={handleSearchClick}/>
    </div>
  )
}

export default LocationInput
