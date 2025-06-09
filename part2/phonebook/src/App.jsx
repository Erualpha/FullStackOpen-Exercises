import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState()

  const addName = (event) => {
    event.preventDefault()
    const exists = persons.filter(
      person => person.name.toLowerCase() === newName.toLowerCase()
    ).length > 0

    if (exists) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const nameObject = { name: newName }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => 
          <div key={person.name + i}>{person.name}</div>
        )}
      </ul>
    </div>
  )
}

export default App