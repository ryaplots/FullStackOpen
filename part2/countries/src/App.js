import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from "./Countries";

function App() {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    const getData = () => {
      axios
        .get('https://restcountries.eu/rest/v2/all')
        .then((response) => {
          setCountries(response.data)
        })
    }

    getData();

  }, []);

  console.log(countries)

  const handleFilterChange = (e) => setNewFilter(e.target.value.toLowerCase())


  return (
    <div>
      <p>find countries</p>
      <input value={newFilter}
             onChange={handleFilterChange}/>
      <Countries searchFilter={newFilter}></Countries>
    </div>
  );
}

export default App;
