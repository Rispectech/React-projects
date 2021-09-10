import React, { useEffect } from 'react'

const Alert = ({ msg, type, removeAlert }) => {
  useEffect(() => {
    const timer = setTimeout(() => removeAlert(), 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
