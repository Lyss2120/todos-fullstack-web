import React from 'react'
import TodosForm from './TodosForm'
import TodoList from './TodoList'
import ShowTasks from './showTasks'

const TodoWrapper = () => {
  const health = [
    {
      todoId: 0,
      todoTitle: "make the bed",
      done: false,
      archived: false,
      tag: "HomeTasks"
    },
    {
      todoId: 1,
      todoTitle: "finish webapp project",
      done: true,
      archived: false,
      tag: "Work"
    },
    {
      todoId: 2,
      todoTitle: "dr appointment",
      done: false,
      archived: false,
      tag: "Health"
    },
    {
      todoId: 3,
      todoTitle: "random task",
      done: true,
      archived: false,
      tag: null
    }
  ]
  // al clickear una opcion se mostrará la lista de todos

  return (
    <div className="d-flex  justify-content-around p-2">
      <TodoList TodoListArr={health} />
      <TodosForm />
    </div>
  )
}

export default TodoWrapper