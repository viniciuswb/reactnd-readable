import { 
  FETCH_CATEGORIES, 
  FETCH_POSTS, 
  ADD_POST,
  DELETE_POST 
} from './types'

import { 
  getCategories, 
  getPosts, 
  createPost,
  removePost
} from "../utils/ReadableAPI"

export const fetchCategories = () => async dispatch => {
  try {
    const res = await getCategories()
    dispatch({ type: FETCH_CATEGORIES, payload: res })
  } catch (error) {
    dispatch({ type: FETCH_CATEGORIES, payload: { error } })
  }
}

export const fetchPosts = () => async dispatch => {
  try {
    const res = await getPosts()
    dispatch({ type: FETCH_POSTS, payload: res })
  } catch (error) {
    dispatch({ type: FETCH_POSTS, payload: { error } })
  }
}

export const addPost = (post) => async dispatch => {
  try {
    const res = await createPost(post)
    dispatch({ type: ADD_POST, payload: res })
  } catch (error) {
    dispatch({ type: ADD_POST, payload: { error } })
  }
}

export const deletePost = (id) => async dispatch => {
  try {
    const res = await removePost(id)
    dispatch({ type: DELETE_POST, payload: res })
  } catch (error) {
    dispatch({ type: DELETE_POST, payload: { error } })
  }
}