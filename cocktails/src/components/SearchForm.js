import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchForm = React.useRef('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const searchItem = () => {
    setSearchTerm(searchForm.current.value)
  }

  console.log(searchForm.current.value)
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Search Your Favorite Cocktail</label>
          <input type='text' id='name' ref={searchForm} onChange={searchItem} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
