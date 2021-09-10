import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { quiz, error, handleChange, handleSubmit } = useGlobalContext()
  // console.log(error)
  return (
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form'>
          <h2> setup quiz</h2>
          {/* amount */}
          <div className='form-control'>
            <label htmlFor='amount'>number of questions</label>
            <input
              type='number'
              id='amount'
              name='amount'
              value={quiz.amount}
              onChange={handleChange}
              className='form-input'
              min={1}
              max={50}
            />
          </div>
          {/* category */}
          <div className='form-control'>
            <label htmlFor='category'>category</label>
            <select
              name='category'
              id='category'
              className='form-input'
              onChange={handleChange}
              value={quiz.category}
            >
              <option value='sports'>sports</option>
              <option value='history'>history</option>
              <option value='politics'>politics</option>
            </select>
          </div>
          {/* difficulty */}
          <div className='form-control'>
            <label htmlFor='difficulty'>difficulty</label>
            <select
              name='difficulty'
              id='difficulty'
              className='form-input'
              onChange={handleChange}
              value={quiz.difficulty}
            >
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
          </div>
          {error && (
            <p className='error'>
              can't generate questions, please try different options
            </p>
          )}
          <button className='submit-btn' onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </section>
    </main>
  )
}

export default SetupForm
