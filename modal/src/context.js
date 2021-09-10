import React, { useState, useContext } from 'react'

const sbContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModal, setModalOpen] = useState(false)

  const showSideBar = () => {
    setIsSidebarOpen(true)
  }
  const hideSideBar = () => {
    setIsSidebarOpen(false)
  }
  const showModal = () => {
    setModalOpen(true)
  }
  const hideModal = () => {
    setModalOpen(false)
  }
  return (
    <sbContext.Provider
      value={{
        isSidebarOpen,
        isModal,
        showSideBar,
        hideSideBar,
        showModal,
        hideModal,
      }}
    >
      {children}
    </sbContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(sbContext)
}
export { sbContext, AppProvider }
