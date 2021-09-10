import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true)
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [Mpage, setMPage] = useState({ menuPage: '', menuLinks: [] })

  const showSideBar = () => {
    setIsSideBarOpen(true)
  }

  const hideSideBar = () => {
    setIsSideBarOpen(false)
  }

  const showSideMenu = (text, location) => {
    sublinks.map((sublink) => {
      const { page, links } = sublink

      if (page === text) {
        setMPage({ menuPage: page, menuLinks: [...links] })
      }
    })
    setLocation(location)
    setIsSideMenuOpen(true)
  }

  const hideSideMenu = () => {
    setIsSideMenuOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        isSideMenuOpen,
        showSideBar,
        hideSideBar,
        showSideMenu,
        hideSideMenu,
        location,
        setLocation,
        Mpage,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
