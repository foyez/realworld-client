import Axios from '../axios'
import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  articles: null,
  errors: null,
}

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    fetchArticlesStart: state => {
      state.articles = []
    },
    fetchArticlesSuccess: (state, { payload }) => {
      // const articles = [...state.articles, ...payload.articles]

      state.articles = payload.articles
      state.errors = null
    },
    fetchArticlesFailure: (state, { payload }) => {
      state.articles = []
      state.errors = payload
    },
  },
})

const { actions, reducer } = articleSlice
export const { fetchArticlesStart, fetchArticlesSuccess, fetchArticlesFailure } = actions

export const selectArticles = state => state.article

export const fetchArticles = () => async dispatch => {
  try {
    const res = await Axios.Articles.all()

    dispatch(fetchArticlesSuccess(res.data))
  } catch (error) {
    dispatch(fetchArticlesFailure(error))
  }
}

export default reducer
