import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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

    axios
      .post('http://localhost:3001/persons', nameObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewNumber('')
        setNewNumber('')
      })
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
      />
      
    </div>
  )
}

export default App