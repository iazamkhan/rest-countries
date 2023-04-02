import React, { useState } from 'react'
import './SingleCountry.scss'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../Header/Header';

function SingleCountry({ mode }) {
    const [countryData, setCountryData] = useState([]);
    const url = 'https://restcountries.com/v3.1';
    const country = useParams();
    
    useEffect(() => {
        axios.get(`${url}/name/${country.name}`)
            .then(res => setCountryData(res.data))
    }, [country])
    console.log(countryData)
    
    return (
        <div className='main-box'>
            <Header />
            <div className='btn-container'>
                <button className="back-button" style={mode ? { boxShadow: 'none', backgroundColor: "#495057", color: 'white' } : { boxShadow: '0.5px 0.5px 6px -3px grey', backgroundColor: "white", color: "black" }}>
                    <Link to="/" style={mode ? { color: 'white', textDecoration: 'none' } : { color: 'black', textDecoration: 'none' }}>&#8592;&nbsp;&nbsp;Back</Link>
                </button>
            </div>
            <div className='details-container'>
                <img src={countryData[0]?.flags.png} alt="flag" width="360px" height="240px" />
                <div className='first-column'>
                    <b>{countryData[0]?.name.common}</b>
                    <div style={{ marginTop: '16px' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContect: 'space-between', alignItems: 'center', height: '24px' }}><h5>Native Name: &nbsp;&nbsp;</h5><div style={{ fontSize: '12px' }}>{countryData[0]?.name.official}</div></div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContect: 'space-between', alignItems: 'center', height: '24px' }}><h5>Population: &nbsp;&nbsp;</h5><div style={{ fontSize: '12px' }}>{countryData[0]?.population}</div></div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContect: 'space-between', alignItems: 'center', height: '24px' }}><h5>Region: &nbsp;&nbsp;</h5><div style={{ fontSize: '12px' }}>{countryData[0]?.region}</div></div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContect: 'space-between', alignItems: 'center', height: '24px' }}><h5>Sub Region: &nbsp;&nbsp;</h5><div style={{ fontSize: '12px' }}>{countryData[0]?.subregion}</div></div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContect: 'space-between', alignItems: 'center', height: '24px' }}><h5>Capital: &nbsp;&nbsp;</h5><div style={{ fontSize: '12px' }}>{countryData[0]?.capital}</div></div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContect: 'space-between', alignItems: 'center', height: '24px', marginTop: '24px' }}><h5>Border Countries: &nbsp;&nbsp;</h5>{countryData[0]?.borders.map((item) => (<div style={{ fontSize: '12px' }}><div style={mode ? { border: '1px solid white', height: '15px', width: '30px', margin: '0 4px' } : { border: '1px solid black', height: '15px', width: '30px', margin: '0 4px' }}>{item}</div></div>))}</div>
                </div>
                <div className='second-column'>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContect: 'space-between', alignItems: 'center', height: '24px' }}><h5>Top Level Domain: &nbsp;&nbsp;</h5><div style={{ fontSize: '12px' }}>{countryData[0]?.tld[0]}</div></div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContect: 'space-between', alignItems: 'center', height: '24px' }}><h5>Currencies: &nbsp;&nbsp;</h5><div style={{ fontSize: '12px' }}>{countryData[0]?.currencies.name}</div></div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContect: 'space-between', alignItems: 'center', height: '24px' }}><h5>Languages: &nbsp;&nbsp;</h5><div style={{ fontSize: '12px' }}>{countryData[0]?.languages.ara}</div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleCountry