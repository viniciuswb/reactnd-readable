import { 
  FETCH_CATEGORIES, 
  FETCH_POSTS, 
  FETCH_POSTS_BY_CATEGORY,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST, 
  VOTE_POST,
  FETCH_COMMENTS
} from './types'

import { 
  getCategories, 
  getPosts, 
  getPostsByCategory,
  createPost,
  updatePost as update,
  votePost as setVote,
  removePost,
  getPostComments
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

export const fetchPostsByCategory = (category) => async dispatch => {
  try {
    const res = await getPostsByCategory(category)
    dispatch({ type: FETCH_POSTS_BY_CATEGORY, payload: res })
  } catch (error) {
    dispatch({ type: FETCH_POSTS_BY_CATEGORY, payload: { error } })
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

export const updatePost = (id, data) => async dispatch => {
  try {
    const res = await update(id, data)
    dispatch({ type: UPDATE_POST, payload: res })
  } catch (error) {
    dispatch({ type: UPDATE_POST, payload: { error } })
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

export const votePost = (id, vote) => async dispatch => {
  try {
    const res = await setVote(id, vote)
    dispatch({ type: VOTE_POST, payload: res })
  } catch (error) {
    dispatch({ type: VOTE_POST, payload: { error } })
  }
}

export const fetchComments = (id) => async dispatch => {
  try {
    const res = await getPostComments(id)
    dispatch({ type: FETCH_COMMENTS, payload: res })
  } catch (error) {
    dispatch({ type: FETCH_COMMENTS, payload: { error } })
  }
}