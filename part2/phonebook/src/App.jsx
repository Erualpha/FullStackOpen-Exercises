import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterPerson, setFilterPerson] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const exists = persons.some(
      person => person.name.toLowerCase() === newName.toLowerCase()
    )
    if (exists) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const nameObject = { name: newName, number: newNumber }

    personService
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const handleDelete = (id) => {
    const personToDelete = persons.find(person => person.id == id)
    if (window.confirm(`Delete ${personToDelete.name} ?`)) {
      personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
    } 
    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterPerson(event.target.value)
  }

  const filterResult = filterPerson
    ? persons.filter(person =>
        person.name.toLowerCase().includes(filterPerson.toLowerCase())
      )
    : persons;

  return (
    <div>

      <h2>Phonebook</h2>

      <Filter 
        value={filterPerson} 
        onChange={handleFilterChange}
      />

      <h3>add a new</h3>

      <PersonForm 
        onSubmit={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons 
        persons={filterResult}
        removePerson={handleDelete}
      />
      
    </div>
  )
}

export default App