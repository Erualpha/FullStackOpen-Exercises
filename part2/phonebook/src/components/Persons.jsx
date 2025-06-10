const Persons = ({ persons }) => (
  <div>
    {persons.map((person, i) =>
      <div key={person.name + i}>
        {person.name} {person.number}
      </div>
    )}
  </div>
)

export default Persons