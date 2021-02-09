import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import Notification from './Notification'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterName, setFilterName] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        personService
            .getAll()
            .then(response => {
                setPersons(response.data)
            })
    }, [])

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
            setErrorMessage(`The contact '${newName}' already exists`)        
            setTimeout(() => { setErrorMessage(null) }, 5000)
            setPersons(persons)
        } else {
        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }

        personService
            .create(nameObject)
            .then(response => {
                setPersons(persons.concat(nameObject))
                setNewName('')
                console.log(persons);
            })
        }
    }

    const handleDelete = (id) => {
        window.confirm('Are you sure you want to detele this contact?');
        personService
            .del(id)
            .then(() => personService.getAll())
            .then(response => setPersons(response.data))
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={errorMessage} />
            <p>filter by:</p>   <input value={filterName}
                onChange={handleFilterChange}
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
                {persons.map(personInfo =>
                    <li key={personInfo.id}>{personInfo.name} {personInfo.number}
                        <button onClick={() => handleDelete(personInfo.id)}>delete</button></li>
                )}
            </ul>
        </div>
    )
}

export default App