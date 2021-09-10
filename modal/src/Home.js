import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
  const { showSideBar, showModal } = useGlobalContext()
  return (
    <main>
      <button className='sidebar-toggle' onClick={showSideBar}>
        <FaBars />
      </button>
      <button className='btn' onClick={showModal}>
        show modal
      </button>
    </main>
  )
}
export default Home
