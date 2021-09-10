import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const defaultState = {
  loading: false,
  cart: [],
  cost: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const clearList = () => {
    dispatch({ type: 'CLEAR' })
  }

  const removeItem = (id) => {
    dispatch({ type: 'DELETE', payload: id })
  }
  const increaseItem = (id) => {
    dispatch({ type: 'INCRESE', payload: id })
  }
  const decreaseItem = (id) => {
    dispatch({ type: 'DECRESE', payload: id })
  }

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({ type: 'FETCH', payload: cart })
  }
  useEffect(() => {
    fetchData()
  }, [])
  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' })
  }, [state.cart])
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearList,
        removeItem,
        increaseItem,
        decreaseItem,
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
