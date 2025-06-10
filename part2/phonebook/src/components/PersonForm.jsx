const PersonForm = ({
  onSubmit,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange
}) => (
  <form onSubmit={onSubmit}>
    <div>
      name: <input
        id="name-input"
        name="name"
        autoComplete="name"
        value={newName}
        onChange={handleNameChange}
      />
    </div>
    <div>
      number: <input
        id="number-input"
        name="number"
        autoComplete="number"
        value={newNumber}
        onChange={handleNumberChange}
      />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

export default PersonForm