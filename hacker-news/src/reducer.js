import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    return { ...state, isLoading: true }
  }

  if (action.type === SET_STORIES) {
    const {
      payload: { hits, nbPages },
    } = action
    return { ...state, hits, nbPages, isLoading: false }
  }

  if (action.type === HANDLE_SEARCH) {
    const { payload } = action
    return { ...state, query: payload, page: 0 }
  }

  if (action.type === REMOVE_STORY) {
    const {
      payload: { id, hits },
    } = action
    return { ...state, hits: hits.filter((item) => item.objectID !== id) }
  }

  // if (action.type === REMOVE_STORY) {
  //   console.log('wokrin')
  //   return {
  //     ...state,
  //     hits: state.hits.filter((story) => story.objectID !== action.payload),
  //   }
  // }

  if (action.type === HANDLE_PAGE) {
    if (action.payload === 'dec') {
      let newPage = state.page - 1
      if (newPage < 0) newPage = state.nbPages - 1
      console.log(state.nbPages)
      return { ...state, page: newPage }
    }
    if (action.payload === 'inc') {
      let newPage = state.page + 1
      if (newPage > state.nbPages - 1) newPage = 0
      return { ...state, page: newPage }
    }
  }
  return state
}
export default reducer
