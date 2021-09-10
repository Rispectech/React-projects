import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''

const tempUrl =
  'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true)
  const [loading, setLoading] = useState(false)
  const [question, setQuestion] = useState([])
  const [index, setIndex] = useState(0)
  const [correctQues, setCorrectQues] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [error, setError] = useState(false)
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: 'sports',
    difficulty: 'easy',
  })

  const fetchdata = async (url) => {
    setWaiting(false)
    setLoading(true)
    const response = await axios(url).catch((err) => console.log(err))
    console.log(response)
    if (response) {
      const data = response.data.results
      if (data.length > 0) {
        setQuestion(data)
        setLoading(false)
        setWaiting(false)
        setError(false)
      } else {
        setWaiting(true)
        setLoading(false)
        setError(true)
      }
    } else {
      setWaiting(true)
      setLoading(false)
    }
  }

  const nextQuestion = () => {
    setIndex((oldstate) => {
      oldstate = oldstate + 1
      console.log(oldstate)
      if (index >= question.length - 1) {
        openModal()
        // setWaiting(true)
        return 0
      } else {
        return oldstate
      }
    })
  }

  const checkAnswer = (value) => {
    if (value) {
      setCorrectQues((oldstate) => oldstate + 1)
    }
    nextQuestion()
  }

  const openModal = () => {
    console.log('openModal')
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
    setWaiting(true)
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setQuiz({ ...quiz, [name]: value })
    console.log(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(quiz)
    const { amount, category, difficulty } = quiz
    const tempUrl =
      'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'

    const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`
    fetchdata(url)
  }
  // const checkAnswerNoNext = ()
  // useEffect(() => {
  //   fetchdata(tempUrl)
  // }, [])
  return (
    <AppContext.Provider
      value={{
        loading,
        waiting,
        index,
        correctQues,
        question,
        isModalOpen,
        nextQuestion,
        checkAnswer,
        closeModal,
        quiz,
        handleSubmit,
        handleChange,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
