import React from 'react'

function TodoProvider() {
    const [todos, setTodos] = React.useState([])
  return (
    <div>TodoProvider</div>
  )
}

export default TodoProvider