import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries }) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {

        // if (visited) {
        //     setVisited(false);
        // }
        // else {
        //     setVisited(true);
        // }
        // setVisited(visited ? false : true);
        setVisited(!visited);
        handleVisitedCountries(country)

    }
    return (
        <div className={`country-card ${visited && 'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name:{country.name.common}</h3>

            <h3>Populations:{country.population.population}</h3>
            <h3>Area:{country.area.area} sq.km  {country.area.area > 300000 ? "large country" : "small country"}</h3>

            <button onClick={handleVisited}>
                {visited ? "Visites" : "Not visited"}
            </button>
        </div>
    );
};

export default Country;