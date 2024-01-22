import React from 'react'
import { HiCheck } from "react-icons/hi2";
import { GoPencil } from "react-icons/go";
import { LiaTimesSolid } from "react-icons/lia";

const TodoCard = (props) => {


  return (

    <div className="px-3 rounded-pill shadow my-1 TodoCard" style={{ 'width': '18rem' }}>
      <div className="d-flex justify-content-between align-items-baseline">
        <p className="fw-bold text-dark text-capitalize">{props.todo.todoTitle}</p>
        {/* <p className="fw-bold text-dark align-self-center
        ">
          <input
            type="text"
            placeholder='Task Name'
            className="form-control"
            // value={text}
            onChange={(e) => setInput(e.target.value)} />
        </p>
        para editar mandar el nombre de la tarea como value a input y submit para guardar
        */}
        <div className='actionButtons '>
          <small className='mx-1' onClick={() => archiveTodoById(props.todo.todoId)}><HiCheck /></small>
          {/* //change done property to true */}
          <small className='mx-1' onClick={() => updateTodoById(props.todo.todoId)}><GoPencil /></small>
          {/* //edit Todo */}
          <small className='mx-1' onClick={() => deleteTododById(props.todo.todoId)}><LiaTimesSolid /></small>
        </div>
      </div>
    </div>

  )
}

export default TodoCard