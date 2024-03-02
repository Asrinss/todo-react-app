import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <input
        type='checkbox'
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
        className='todo-checkbox'
      />
      <p onClick={() => toggleComplete(task.id)} className={'${task.completed ? "completed": ""}'}>{task.task}</p>
      <div>
         <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)}></FontAwesomeIcon>
         <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)}></FontAwesomeIcon>
      </div>     
    </div>
  )
}

export default Todo
