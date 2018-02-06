import { FETCH_POSTS, FETCH_POSTS_BY_CATEGORY, ADD_POST, UPDATE_POST, DELETE_POST, VOTE_POST } from '../actions/types'

export default function (state = [], action) {
  let newState = [...state]

  switch (action.type) {
    case FETCH_POSTS:
      return action.payload
    case FETCH_POSTS_BY_CATEGORY:
      return action.payload
    case ADD_POST:
      return [...state, action.payload]
    case UPDATE_POST:
      newState.splice(newState.findIndex(post => post.id === action.payload.id), 1, action.payload)
      return newState
    case DELETE_POST:
      return state.filter(post => post.id !== action.payload.id)
    case VOTE_POST:
      newState.splice(newState.findIndex(post => post.id === action.payload.id), 1, action.payload)
      return newState
    default:
      return state
  }
}