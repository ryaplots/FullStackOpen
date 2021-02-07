import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";

const Countries = ({ searchFilter }) => {
    const [countries, setCountries] = useState([]);

    const getCountry = () => {
        axios
            .get(`https://restcountries.eu/rest/v2/name/${searchFilter}`)
            .then(response => {
                setCountries(response.data);
            })
            .catch(function (error) {
                console.log("Error", error.message);
            });
    };
    useEffect(getCountry, [searchFilter]);

    console.log(countries)

    if (countries.length > 10) {
        return <p>Too many matched, please specify the filter</p>
    } else if (countries.length <= 10 && countries.length > 1) {
        return (countries.map(country => (
            <Country key={country.numericCode} searchedCountry={country}></Country>
        ))
        )
    } else if (countries.length === 1) {
        return (
            <div>
                <h2>{countries[0].name}</h2>
                <p>capital {countries[0].capital}</p>
                <p>population {countries[0].population}</p>
                <h3>Languages</h3>
                {countries[0].languages.map(language => (
                    <li key={language.name}>{language.name}</li>
                ))}
                <img
                    src={`${countries[0].flag}`}
                    alt={`flag of ${countries[0].name}`}
                    height="150"
                    width="150"></img>
            </div>
        )
    } else {
        return null;
    }
};

export default Countries;