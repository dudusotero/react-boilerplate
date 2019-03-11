import React from 'react'
import { TodosCtxProvider } from './components/TodosList/reducer'
import TodosList from './components/TodosList/TodosList'
import { UserCtxProvider } from './components/Signin/reducer'
import SignIn from './components/Signin/SignIn'

const App = () => (
  <div>
    <h1>App</h1>
    <p>TodosList using async requests</p>
    <TodosCtxProvider>
      <TodosList />
    </TodosCtxProvider>
    <UserCtxProvider>
      <SignIn />
    </UserCtxProvider>
  </div>
)

export default App
