import React, { useEffect } from 'react'
import '../../globals.css'
import './Header.css'

interface headerProps {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

const Header: React.FC<headerProps> = (props: headerProps) => {
  const toggleTheme = (): void => {
    if (props.theme === 'light') {
      props.setTheme('dark')
    } else {
      props.setTheme('light')
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', props.theme)
    const header = document.querySelector('header')
    if (header !== null) {
      header.className = 'App-header ' + props.theme
    }
    document.body.className = props.theme + 'er'
  }, [props.theme])

  return (
    <div className="header darkest" id="header">
      <p>My Curriculum Vitae</p>
      <button
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          toggleTheme()
        }}
      >
        Switch Theme
      </button>
    </div>
  )
}

export default Header
