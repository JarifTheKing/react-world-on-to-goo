import React, { use } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise)

    const countries = countriesData.countries

    return (
        <div>
            <h1 style={{textAlign: 'center', color: 'gold', border: '1px solid white', padding: '10px', borderRadius: '10px'}}>Welcome to Countries  {countries.length}</h1>
            <div className='countries'>
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;