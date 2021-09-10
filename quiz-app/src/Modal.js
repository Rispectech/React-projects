import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const { correctQues, isModalOpen, closeModal, question } = useGlobalContext()

  return (
    <div className={isModalOpen ? 'modal-container isOpen' : 'modal-container'}>
      <div className='modal-content'>
        <h2>congrats!</h2>
        <p>
          you answered the {((correctQues / question.length) * 100).toFixed(0)}%
          question correctly
        </p>

        <button className='close-btn' onClick={closeModal}>
          play again
        </button>
      </div>
    </div>
  )
}

export default Modal
