import React, { useState } from 'react';
import './country.css'
const Country = ({ country }) => {

    const [visited, setVisited] = useState(false)

    const handleVisited =()=>{
        // ternary condition
        // setVisited(visited? false : true)

        // Toggle system
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited && "country-visited"}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <div>
                <h2 >Name:-  {country.name.common}</h2>
                <p >Capital:-  {country.capital.capital}</p>
                <p>Area:-  {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>

                <button onClick={handleVisited}>
                    {visited ? "Visited" : "Not Visited"}
                </button>
            </div>
        </div>
    );
};

export default Country;