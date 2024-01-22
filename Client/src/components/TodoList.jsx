import React, { useContext } from 'react'
import TodoCard from './TodoCard.jsx'
import ShowTasks from './showTasks.jsx'
import { Context } from '../store/AppContext.jsx'

const TodoList = (props) => {
    const {store, actions} = useContext(Context)

    return (
        <div className='todo-list d-flex flex-column px-2 m-4 '>
            {store.todos.map((todo, i) => {
                return (
                    <TodoCard todo={todo} key={i}/>
                )
            })
            }
        </div>
    )
}

export default TodoList