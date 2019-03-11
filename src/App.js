import React from 'react'
import { TodosCtxProvider } from './components/TodosList/reducer'
import TodosList from './components/TodosList/TodosList'

const App = () => (
  <div>
    <h1>App</h1>
    <p>An application!</p>
    <TodosCtxProvider>
      <TodosList />
    </TodosCtxProvider>
  </div>
)

export default App
