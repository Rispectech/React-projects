import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const useLocalStorage = () => {
  let list = localStorage.getItem('item')

  if (list) {
    return JSON.parse(localStorage.getItem('item'))
  } else return []
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(useLocalStorage())
  const [edit, setEdit] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const eventHandler = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true, 'please enter value', 'danger')
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === edit) {
            const editItem = { ...item, name: name }
            return editItem
          }
          return item
        })
      )
      setName('')
      setIsEditing(false)
      setEdit(null)
      showAlert(true, 'Item edited', 'success')
    } else {
      showAlert(true, 'List updated ', 'success')
      const newPeople = { id: new Date().getTime(), name: name }
      setList([...list, newPeople])
      setName('')
    }
  }

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, type, msg })
  }

  const clearList = () => {
    showAlert(true, 'List cleared', 'danger')
    setList([])
  }
  const deleteElement = (id) => {
    showAlert(true, 'Item deleted', 'danger')
    const newList = list.filter((people) => people.id !== id)
    setList([...newList])
  }

  const editElement = (id) => {
    const Element = list.find((item) => item.id === id)
    setIsEditing(true)
    setEdit(Element.id)
    setName(Element.name)
  }

  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(list))
  }, [list])

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={eventHandler}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List
            items={list}
            deleteElement={deleteElement}
            editElement={editElement}
          />
          <button className='clear-btn' onClick={() => clearList()}>
            clear Items
          </button>
        </div>
      )}
    </section>
  )
}

export default App
