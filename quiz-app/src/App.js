import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {
  const {
    loading,
    waiting,
    question,
    correctQues,
    index,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext()
  // const var1 = useGlobalContext()
  // console.log(loading,waiting)
  // console.log(var1)
  if (waiting) {
    // console.log(waiting)
    return <SetupForm />
  }
  if (loading) {
    return <Loading />
  }
  const { question: ques, correct_answer, incorrect_answers } = question[index]
  // console.log(correct_answer, incorrect_answers, ques, question[0])
  const quesList = [...incorrect_answers]
  const tempIndex = Math.floor(Math.random() * 4)
  if (tempIndex === 3) {
    quesList.push(correct_answer)
  } else {
    quesList.push(quesList[tempIndex])
    quesList[tempIndex] = correct_answer
  }
  return (
    <main>
      <Modal />
      <section className='quiz'>
        <p className='correct-answers'>
          correct answers : {correctQues}/{index}
        </p>
        <article className='container'>
          <h2 dangerouslySetInnerHTML={{ __html: ques }} />
          <div className='btn-container'>
            {quesList.map((answers, index) => {
              return (
                <button
                  key={index}
                  className='answer-btn'
                  onClick={() => checkAnswer(answers === correct_answer)}
                  dangerouslySetInnerHTML={{ __html: answers }}
                />
              )
            })}
          </div>
        </article>
        <div className='btn-container-check'>
          <button className='next-question'>check answer</button>
          <button className='next-question' onClick={nextQuestion}>
            next question
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
