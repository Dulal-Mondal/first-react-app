import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h1>Go on wrold ture...{countries.length}</h1>
            <div className='card'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;