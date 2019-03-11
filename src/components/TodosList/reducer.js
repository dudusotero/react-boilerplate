import React, {
  useContext, createContext, useReducer, useEffect,
} from 'react'

const initialState = {
  todos: [],
  loading: true,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'fetch':
      return { todos: [...action.payload], loading: false }
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

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
      .then(response => response.json())
      .then(data => todosDispatch({ type: 'fetch', payload: data }))
  }, [])

  return (
    <Context.Provider value={{ todosDispatch, todosStore }}>
      {children}
    </Context.Provider>
  )
}
