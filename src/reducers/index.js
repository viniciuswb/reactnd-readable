import { combineReducers } from 'redux'
import posts from './postsReducer'
import categories from './categoriesReducer'

export default combineReducers({
  posts, categories
})