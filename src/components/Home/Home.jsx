import React, { useState, useEffect } from 'react'
import './Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Header from '../Header/Header'


function Home({ mode }) {
    const [countriesData, setCountriesData] = useState([]);
    const url = 'https://restcountries.com/v3.1/all';

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setCountriesData(res)
            })
    }, [])

    return (
        <div className="main-container">
            <Header />
            <div className="inputs">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                <input type="text" style={mode ? { backgroundColor: "#495057", boxShadow: "none" } : { backgroundColor: "white", boxShadow: '0.5px 0.5px 6px -3px grey' }} className="search-box" placeholder="Search for a country..." />
                <select style={mode ? { backgroundColor: "#495057", boxShadow: "none", color: "white" } : { backgroundColor: "white", boxShadow: '0.5px 0.5px 6px -3px grey', color: "black" }} className="dropdown">
                    <option value="">Filter by Region</option>
                    <option value="one">One</option>
                    <option value="two">two</option>
                </select>
            </div>
            <div className="second-box">
                {countriesData.data?.map(((country, index) =>
                (<Link to={`/country/${country.name.common}`} style={{ textDecoration: 'none', color: 'black' }}><div className='country-card' style={mode ? { color: "white", backgroundColor: "#495057", boxShadow: "none" } : { color: "black", backgroundColor: "white", boxShadow: '0.5px 0.5px 6px -3px grey' }}><img src={country.flags.png} className="flag-img" alt="flag" /><div style={{ fontSize: '14px', fontWeight: '800', marginTop: '8px' }}>{country.name.common}</div><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: '12px' }}><div style={{ fontSize: '12px', fontWeight: 'bold' }}>Population: </div><div style={{ fontSize: '12px', display: 'inline' }}>{country.population}</div></div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: '8px' }}><div style={{ fontSize: '12px', fontWeight: 'bold' }}>Region: </div><div style={{ fontSize: '12px', display: 'inline' }}>{country.region}</div></div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: '8px' }}><div style={{ fontSize: '12px', fontWeight: 'bold' }}>Capital: </div><div style={{ fontSize: '12px', display: 'inline' }}>{country.capital}</div></div>
                </div></Link>)
                ))}
            </div>
        </div>
    )
}

export default Home