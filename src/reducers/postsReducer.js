import { FETCH_POSTS, ADD_POST, UPDATE_POST, DELETE_POST } from '../actions/types'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload
    case ADD_POST:
      return [...state, action.payload]
    case UPDATE_POST:
      let newState = [...state]
      newState.splice(newState.findIndex(post => post.id === action.payload.id), 1, action.payload)
      return newState
    case DELETE_POST:
      return state.filter(post => post.id !== action.payload.id)
    default:
      return state
  }
}