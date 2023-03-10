import React from 'react'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

function Header() {
  return (
    <div className="main-container">
            <div className="top-header">
                <p className="text">Where in the world?</p>
                <div className="dark-mode-box">
                    <FontAwesomeIcon icon={faMoon} />
                    <p className="toggle-text">Dark Mode</p>
                </div>
            </div>
            </div>
  )
}

export default Header