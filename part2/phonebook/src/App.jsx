import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notifications'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterPerson, setFilterPerson] = useState('')
  const [notifMessage, setNotifMessage] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
  const person = persons.find(
    p => p.name.toLowerCase() === newName.toLowerCase()
  )
  const exists = !!person

  if (exists) {
    const id = person.id
    const updatedPerson = { ...person, number: newNumber }
    if (window.confirm(`${newName} is already added to phonebook, replace old number with a new one?`)) {
      personService
        .update(id, updatedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(p => p.id === id ? returnedPerson : p))
          setNewName('')
          setNewNumber('')
          setNotifMessage(`${returnedPerson.name}'s number is changed`)
          setTimeout(() => setNotifMessage(null), 5000)
        })
      }
      return
    }

    const nameObject = { name: newName, number: newNumber }

    personService
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setNotifMessage(`Added ${returnedPerson.name}`)
        setTimeout(() => setNotifMessage(null), 5000)
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

      <Notification message={notifMessage}/>

      <Filter 
        value={filterPerson} 
        onChange={handleFilterChange}
      />

      <h3>Add a new</h3>

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