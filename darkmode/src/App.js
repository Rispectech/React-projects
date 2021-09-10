import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const getTheme = () => {
  if (localStorage.getItem('theme')) return localStorage.getItem('theme')
  else return 'light-theme'
}
function App() {
  const [theme, setTheme] = useState(getTheme)

  const toggleTheme = () => {
    if (theme === 'light-theme') setTheme('dark-theme')
    if (theme === 'dark-theme') setTheme('light-theme')
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>overreacted</h1>
          <button className='btn' onClick={toggleTheme}>
            {' '}
            toggle
          </button>
        </div>
      </nav>
      <section className='articles'>
        {data.map((item) => {
          return <Article key={item.id} {...item} />
        })}
      </section>
    </main>
  )
}

export default App
