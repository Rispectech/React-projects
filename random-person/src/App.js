import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

function App() {
  const [displayPerson, setDisplayPerson] = useState({})
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('name')
  const [value, setValue] = useState('random person')

  const fetchdata = async () => {
    try {
      setLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      const { results } = data
      const person = results[0]
      const { email, phone } = person
      const {
        picture: { large: image },
      } = person
      const {
        dob: { age },
      } = person
      const {
        location: {
          street: { number: streetNumber, name: streetName },
        },
      } = person
      const {
        name: { first: firstName, last: lastName },
      } = person
      const {
        login: { password },
      } = person
      const newPerson = {
        name: `${firstName} ${lastName}`,
        age,
        street: `${streetNumber} ${streetName}`,
        image,
        phone,
        password,
        email,
      }
      console.log(person)
      console.log(newPerson)
      setDisplayPerson(newPerson)
      setLoading(false)
      setValue(newPerson.name)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchdata()
  }, [])

  const handleValue = (e) => {
    if (e.target.classList.contains('icon')) {
      const value = e.target.dataset.label
      console.log('working')
      setTitle(value)
      setValue(displayPerson[value])
    } else {
      console.log('not-working')
    }
  }
  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img
            src={(displayPerson && displayPerson.image) || defaultImage}
            alt='random user'
            className='user-img'
          />
          <p className='user-title'> My {title} is</p>
          <p className='user-value'>{value}</p>
          <div className='values-list'>
            <button
              className='icon'
              data-label='name'
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className='icon'
              data-label='email'
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button className='icon' data-label='age' onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              className='icon'
              data-label='street'
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className='icon'
              data-label='phone'
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className='icon'
              data-label='password'
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className='btn' type='button ' onClick={fetchdata}>
            {loading ? 'Loading...' : 'Random Person'}
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
