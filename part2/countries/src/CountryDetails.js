import React, { useState, useEffect } from "react";

const CountryDetails = ({searchedCountry}) => {
    return (
        <div>
            <h2>{searchedCountry.name}</h2>
            <p>capital {searchedCountry.capital}</p>
            <p>population {searchedCountry.population}</p>
            <h3>Languages</h3>
            {searchedCountry.languages.map(language => (
                <li key={language.name}>{language.name}</li>
            ))}
            <img
                src={`${searchedCountry.flag}`}
                alt={`flag of ${searchedCountry.name}`}
                height="150"
                width="150"></img>
        </div>
    )
}

export default CountryDetails;