import { FETCH_POSTS, ADD_POST, DELETE_POST } from '../actions/types'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return  action.payload
    case ADD_POST:
      return [...state, action.payload]
    case DELETE_POST:
      return state.filter(post => post.id !== action.payload.id)
    default:
      return state
  }
}