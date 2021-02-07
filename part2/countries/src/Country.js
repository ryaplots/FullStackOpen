import React, { useState, useEffect } from "react";
import CountryDetails from "./CountryDetails";
import './CountryDetails.css';

const Country = ({ searchedCountry }) => {
    const [show, setShow] = useState(false);
    const onClick = () => setShow(!show);

    return (
        <div>
            <p>{searchedCountry.name}</p><button onClick={onClick}>show</button>
            { show ? <CountryDetails  searchedCountry={searchedCountry}></CountryDetails> : null }
        </div>
    )
};

export default Country;