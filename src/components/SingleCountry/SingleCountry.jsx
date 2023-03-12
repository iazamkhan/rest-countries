import React, { useState } from 'react'
import './SingleCountry.scss'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../Header/Header';

function SingleCountry() {
    const [countryData, setCountryData] = useState([]);
    const url = 'https://restcountries.com/v3.1';
    const country = useParams();
    useEffect(() => {
        axios.get(`${url}/name/${country.name}`)
            .then(res => setCountryData(res))
    }, [country])
    console.log(countryData)
    return (
        <div className='main-box'>
            <Header />
            <div className='btn-container'>
            <button className="back-button">
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}>&#8592;&nbsp;&nbsp;Back</Link>
            </button>
            </div>
        </div>
    )
}

export default SingleCountry