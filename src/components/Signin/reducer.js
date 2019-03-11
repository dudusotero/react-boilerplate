import React, {
  useContext, createContext, useReducer, useEffect,
} from 'react'

import api from '../../services/api'
import { isAuthenticated, signin } from '../../services/auth'
import { getUrlParams } from '../../helpers'

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

export const useUser = () => useContext(Context)

export const UserCtxProvider = ({ children }) => {
  const [userStore, userDispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (isAuthenticated()) {
      api
        .get('/users')
        .then(response => userDispatch({ type: 'fetch', payload: response.data }))
    } else if (window.location.search) {
      const params = getUrlParams(window.location.search)
      if (params.token) {
        signin(params.token)
        window.location.href = 'http://localhost:3000'
      }
    }
  }, [])

  return (
    <Context.Provider value={{ userDispatch, userStore }}>
      {children}
    </Context.Provider>
  )
}
