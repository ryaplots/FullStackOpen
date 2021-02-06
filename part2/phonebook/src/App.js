import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 0 },
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterName, setFilterName] = useState('')

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setFilterName(event.target.value)
    }

    const handleClick = () => { 
        const filtered = persons.filter(obj => obj.name.toLowerCase().startsWith(filterName.toLowerCase()))
        console.log(filtered)
    }

    const addName = (event) => {
        if (persons.find(e => e.name === newName) != undefined) {
            alert(`${newName} is already added to phonebook`)
            return
        }
        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }
        setPersons(persons.concat(nameObject))
        setNewName('')
        console.log(persons);
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <p>filter by:</p>   <input value={filterName}
                                       onChange= {handleFilterChange}
                                />
            <button onClick={handleClick}>search</button>
            <form onSubmit={addName}>
                <div>
                    name: <input
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    number: <input
                        value={newNumber}
                        onChange={handleNumberChange} 
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
            {persons.map(personInfo => <li key={personInfo.id}>{personInfo.name} {personInfo.number}</li>)}
            </ul>
        </div>
    )
}

export default App