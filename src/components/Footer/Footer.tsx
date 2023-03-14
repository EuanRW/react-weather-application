import React from 'react'
import { FaGithub } from 'react-icons/fa'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer>
      <p>
        <a href='https://github.com/EuanRW' target='_blank' rel="noreferrer">Euan Williams</a>
      </p>
      <a href='https://github.com/EuanRW' target='_blank' rel="noreferrer" className="github-icon hvr-icon-pop hvr-icon">
        <FaGithub className='hvr-icon-pop hvr-icon' />
      </a>
    </footer>
  )
}

export default Footer
