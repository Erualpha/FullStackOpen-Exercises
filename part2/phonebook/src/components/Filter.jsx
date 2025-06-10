
const Filter = ({ value, onChange }) => (
  <div>
    filter shown with: <input
      id="filter-input"
      name="filter"
      value={value}
      onChange={onChange}
    />
  </div>
)

export default Filter