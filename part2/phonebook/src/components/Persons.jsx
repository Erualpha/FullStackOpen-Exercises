const Persons = ({ persons, removePerson }) => (
  <div>
    {persons.map((person, i) =>
      <div key={person.name + i}>
        {person.name} {person.number} <button onClick={() => removePerson(person.id)}>delete</button>
      </div>
    )}
  </div>
)

export default Persons