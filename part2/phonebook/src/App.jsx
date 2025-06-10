import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterPerson, setFilterPerson] = useState('')

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
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
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

      <div>
        filter shown with: <input
          id="filter-input"
          name="filter"
          autoComplete='name'
          value={filterPerson}
          onChange={handleFilterChange}
        />
      </div>

      <h2>add a new</h2>

      <form onSubmit={addName}>
        <div>
          name: <input 
            id="name-input"
            name="name"
            autoComplete='name'
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input
            id="number-input"
            name="number"
            autoComplete='number'
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <div>
        <h2>Numbers</h2>
        {filterResult.map((person, i) => 
          <div key={person.name + i}>
            {person.name} {person.number}
          </div>
        )}
      </div>
    </div>
  )
}

export default App