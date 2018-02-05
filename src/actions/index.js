import { FETCH_CATEGORIES, FETCH_POSTS } from './types'
import { getCategories, getPosts } from "../utils/ReadableAPI"

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