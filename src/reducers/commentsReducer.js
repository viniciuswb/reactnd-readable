import {ADD_COMMENT, DELETE_COMMENT, FETCH_COMMENTS, VOTE_COMMENT} from '../actions/types'

export default function (state = [], action) {
  let newState = [...state]

  switch (action.type) {
    case FETCH_COMMENTS:
      return action.payload
    case VOTE_COMMENT:
      newState.splice(newState.findIndex(comment => comment.id === action.payload.id), 1, action.payload)
      return newState
    case ADD_COMMENT:
      return [...state, action.payload]
    case DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.payload.id)
    default:
      return state
  }
}