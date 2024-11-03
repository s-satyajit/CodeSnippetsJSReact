import { useState, useEffect } from 'react'
import './App.css'

const countries = [
  {
    name: "India",
    value: "IN",
    cities: [
      "Delhi", "Mumbai"
    ]
  },
  {
    name: "Pak",
    value:"PK",
    cities: [
      "Lahore", "Karachi"
    ]
  },
  {
    name: "Bangladesh",
    value: "BG",
    cities: [
      "Dhaka", "Chittagong"
    ]
  }
]

function App() {

  const [country, setCountry] = useState('')

  return (
    <>
      <select
      value={country}
      onChange={(e) => {
        console.log(e.target.value)
        setCountry(e.target.value)
      }}
      >
        {countries.map((item, index) => {
          return (
            <option value={index} key={item.value}>
              {item.name}
            </option>
          )
        })}
      </select>

      <select>
        {countries[country] && countries[country].cities.map((item, index) => {
          return (
            <option value={index}>{item}</option>
          )
        })}
      </select>

    </>
  )
}

export default App
