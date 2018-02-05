import { FETCH_CATEGORIES } from './types'
import { getCategories } from "../utils/ReadableAPI"

export const fetchCategories = () => async dispatch => {
  try {
    const res = await getCategories()
    dispatch({ type: FETCH_CATEGORIES, payload: res })
  } catch (error) {
    dispatch({ type: FETCH_CATEGORIES, payload: { error } })
  }
}