import React, { useState } from 'react'
import { useTodosList } from './reducer'

const TodosList = () => {
  const { todosStore, todosDispatch } = useTodosList()

  const [inputValue, setInputValue] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    todosDispatch({ type: 'add', payload: { title: inputValue } })
    setInputValue('')
  }

  function toggleTodo(id) {
    todosDispatch({ type: 'toggle', payload: { id } })
  }

  function removeTodo(id) {
    todosDispatch({ type: 'remove', payload: { id } })
  }

  return (
    <div>
      <h2>Todos List</h2>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add
        </button>
      </form>
      <ul>
        {todosStore.todos.map(todo => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.title}
            <br />
            <button type="button" onClick={() => toggleTodo(todo.id)}>
              Toggle
            </button>
            <button type="button" onClick={() => removeTodo(todo.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodosList
