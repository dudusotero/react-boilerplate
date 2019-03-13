import React, {
  useContext, createContext, useReducer, useEffect,
} from 'react'

import api from '../services/api'
import { isAuthenticated, signin } from '../services/auth'
import { getUrlParams } from '../helpers'
import { useRouter } from '../hooks'

const initialState = {
  user: {},
  loading: true,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'fetch':
      return { user: { ...action.payload }, loading: false }
    default:
      return state
  }
}

const Context = createContext()

export const useAuth = () => useContext(Context)

export const AuthCtxProvider = ({ children }) => {
  const [authStore, authDispatch] = useReducer(reducer, initialState)

  const { history, location } = useRouter()

  useEffect(() => {
    if (isAuthenticated()) {
      api
        .get('/users')
        .then(response => authDispatch({ type: 'fetch', payload: response.data }))
        .catch(() => history.push('/signin'))
    } else if (location.search) {
      const params = getUrlParams(location.search)
      if (params.token) {
        signin(params.token)
        history.push('/settings')
      }
    } else {
      authDispatch({ type: 'fetch', payload: {} })
    }
  }, [history, location.search])

  return (
    <Context.Provider value={{ authDispatch, authStore }}>
      {children}
    </Context.Provider>
  )
}
