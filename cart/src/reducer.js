const reducer = (state, action) => {
  if (action.type === 'CLEAR') {
    return { ...state, cart: [] }
  }
  if (action.type === 'DELETE') {
    const newCart = state.cart.filter((item) => item.id !== action.payload)
    console.log(newCart)
    return { ...state, cart: newCart }
  }
  if (action.type === 'INCRESE') {
    let { cart } = state
    let newCart = cart.map((item) => {
      if (action.payload === item.id) {
        return { ...item, amount: item.amount + 1 }
      }
      return item
    })
    return { ...state, cart: newCart }
  }
  if (action.type === 'DECRESE') {
    let { cart } = state
    let newCart = cart
      .map((item) => {
        if (action.payload === item.id) {
          console.log(item)
          return { ...item, amount: item.amount - 1 }
        }
        return item
      })
      .filter((item) => item.amount !== 0)
    return { ...state, cart: newCart }
  }

  if (action.type === 'GET_TOTAL') {
    let { itemAmount, itemTotal } = state.cart.reduce(
      (totalItem, currentItem) => {
        let { price, amount } = currentItem
        totalItem.itemAmount += amount
        totalItem.itemTotal += amount * price
        console.log(totalItem)
        return totalItem
      },
      { itemAmount: 0, itemTotal: 0 }
    )
    return { ...state, amount: itemAmount, cost: itemTotal }
  }

  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }

  if (action.type === 'FETCH') {
    return { ...state, loading: false, cart: action.payload }
  }
  return state
}

export default reducer
