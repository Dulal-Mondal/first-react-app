import React from 'react';
import './Country.css'

const Country = ({ country }) => {
    return (
        <div className='country-card'>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name:{country.name.common}</h3>

            <h3>Populations:{country.population.population}</h3>
            <h3>Area:{country.area.area} sq.km</h3>
        </div>
    );
};

export default Country;