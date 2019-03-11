import React, { useContext, createContext, useReducer } from 'react'

const initialState = {
  todos: [],
  loading: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        todos: [
          ...state.todos,
          { ...action.payload, id: Math.random(), completed: false },
        ],
        loading: false,
      }
    case 'toggle':
      return {
        todos: state.todos.map(todo => (todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo)),
        loading: false,
      }
    case 'remove':
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
        loading: false,
      }
    default:
      return state
  }
}

const Context = createContext()

export const useTodosList = () => useContext(Context)

export const TodosCtxProvider = ({ children }) => {
  const [todosStore, todosDispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{ todosDispatch, todosStore }}>
      {children}
    </Context.Provider>
  )
}
