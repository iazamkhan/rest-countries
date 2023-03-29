import { React, useState } from 'react'
import { useLocation } from 'react-router'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

function Header() {

  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {setDarkMode(!darkMode)}
  console.log(darkMode);

  return (
    <div className="main-container" style={darkMode ? {backgroundColor : "grey"} : {backgroundColor: "white"}}>
      <div className="top-header">
        <p className="text">Where in the world?</p>
        <div className="dark-mode-box" onClick={toggleDarkMode} style={{cursor: 'pointer'}}>
          <FontAwesomeIcon icon={faMoon} />
          <p className="toggle-text">Dark Mode </p>
        </div>
      </div>
    </div>
  )
}

export default Header