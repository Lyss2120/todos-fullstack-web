import React, { useContext, useState } from 'react'
import { Context } from '../store/AppContext.jsx'
import Select from 'react-select'
// import ShowTasks from './showTasks'

const TodosForm = () => {
  const { store, actions } = useContext(Context)

  const [inputValue, setInputValue] = useState('')
  const [selectValue, setselectValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
    console.log(inputValue);
  }
  const handleSubmit = (e) => {
    e.preventDefault() // evita que actualice la página

    if(inputValue === '') return
    const newTask = {
      todoId: new Date(),
      todoTitle: inputValue,
      done: false,
      archived: false,
      tag: selectValue
    } // newTask es lo que se mande en el input

    setStore({ todos: [...store.todos, newTask] })
    console.log(e);
  }


  return (
    <div className='todo-form d-flex m-4'>
      <form
        className="side-bar-add-task shadow p-4 card"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h5 className='text-start '>Add a new task</h5>
        <div className="mb-3">
          <input
            type="text"
            placeholder='Task Name'
            className="form-control"
            value={inputValue}
            onChange={handleChange} />
        </div>
        <div className="mb-3">
          <Select options={store.tags}
          onChange={(selectedOption)=> {setselectValue(selectedOption), console.log(selectedOption)}}
          />
        </div>
        <button onSubmit={handleSubmit} type="submit" className="btn btn-outline-dark my-3">Submit</button>
      </form>
    </div>
  )
}

export default TodosForm