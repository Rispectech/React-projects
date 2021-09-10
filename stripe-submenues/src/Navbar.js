import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { showSideBar, showSideMenu, hideSideMenu } = useGlobalContext()

  const displaySubMenu = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const top = tempBtn.top + 40
    showSideMenu(page, { center, top })
  }

  const manageHideSideMenu = (e) => {
    if (!e.target.classList.contains('link-btn')) hideSideMenu()
  }
  return (
    <nav className='nav' onMouseOver={manageHideSideMenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='striped' className='nav-logo' />
          <button className='btn toggle-btn' onClick={showSideBar}>
            <FaBars />
          </button>
        </div>

        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>
              company
            </button>
          </li>
        </ul>

        <button className='btn signin-btn'>Sign in </button>
      </div>
    </nav>
  )
}

export default Navbar
