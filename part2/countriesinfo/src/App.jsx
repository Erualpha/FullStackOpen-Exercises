import { useState, useEffect } from "react";
import axios from 'axios'

const App = () => {

  const [value, setValue] = useState('')
  const [data, setData] = useState([])
  const [country, setCountry] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    console.log('effect run, country is now', country)

    if (country) {
      console.log('fetching country data...')
      axios
        .get(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => {
          console.log(response.data)
          setData(Array.isArray(response.data) ? response.data : [response.data])
          setSelectedCountry(null)
        })
        .catch(error => {
          console.error('Error fetching country data:', error)
          setData([])
        })
    } 
  }, [country])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (event) => {
    event.preventDefault()
    setCountry(value)
  }

  return (
    <div>

      <form onSubmit={onSearch}>
        <label>find countries </label>
        <input value={value} onChange={handleChange} />
      </form>

      <div>
        {data.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : data.length > 1 && !selectedCountry ? (
          <div>
            {data.map((country, index) => (
              <div key={index}>
                {country.name.common}
                <button onClick={() => setSelectedCountry(country)}>Show</button>
              </div>
            ))}
          </div>
        ) : data.length === 1 || selectedCountry ? (
          (selectedCountry ? [selectedCountry] : data).map((country, index) => (
            <div key={index}>
              <h2>{country.name.common}</h2>
              <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
              <p>Area: {country.area}</p>
              <h2>Languages</h2>
              <ul>
                {country.languages
                  ? Object.values(country.languages).map((lang, i) => (
                      <li key={i}>{lang}</li>
                    ))
                  : <li>N/A</li>
                }
              </ul>
              <img
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`}
                width="100"
              />
            </div>
          ))
        ) : (
          <p>No country found</p>
        )}
      </div>
      
    </div>
  )
}

export default App
