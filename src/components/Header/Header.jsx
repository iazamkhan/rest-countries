import { React, useState } from 'react'
import { useLocation } from 'react-router'
import { useSelector, useDispatch } from "react-redux";
import darkModeActions from '../../actions/darkModeActions'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons';

function Header() {

  const mode = useSelector(state => state)
  const dispatch = useDispatch();

  return (
    <div className="main-container" style={mode ? { backgroundColor: "#495057" } : { backgroundColor: "white" }}>
      <div className="top-header" style={mode ? { boxShadow: 'none' } : { boxShadow: '0.5px 0.5px 6px -3px grey' }}>
        <p className="text">Where in the world?</p>
        <div className="dark-mode-box" onClick={() => dispatch(darkModeActions())} style={{ cursor: 'pointer' }}>
         {mode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />} 
          <p className="toggle-text">{mode ? "Light" : "Dark"} Mode </p>
        </div>
      </div>
    </div>
  )
}

export default Header