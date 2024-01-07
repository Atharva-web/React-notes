import { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoItem({ todo }) {
    console.log(todo) // logging two times, why?

    const { deleteTodo, toggleComplete } = useTodo();

    const [toggleCompleted, setToggleCompleted] = useState(false)
    const [isTodoEditable, setIsTodoEditable] = useState(false)

    function toggle(e) {
        setToggleCompleted(function(prevToggleCompleted) {
            return !prevToggleCompleted
        })
        todo.completed = !todo.completed
    }

    function edit(e) {
        setIsTodoEditable(function(editable) {
            return !editable
        })
        
    }

    return (
        <div className={`flex justify-center gap-28 my-2`}>
            <div>
                <input className='mr-2'
                    type='checkbox'
                    checked={toggleCompleted}
                    onChange={function(e) {
                        toggle(e)
                    }}
                />
                
                <input className={`border-2 border-white ${toggleCompleted? 'line-through' : 'text-white'}`}
                    type='text'
                    defaultValue={todo.todoText}
                    readOnly={!isTodoEditable}
                />
            </div>
            <div>
                <button onClick={function(e) {
                    edit(e)
                }}
                >📄edit</button> {/* 📝 */}

                <button onClick={function(e) {
                    deleteTodo(todo.id)
                }}>❌delete</button>
            </div>
        </div>
    )
}
export default TodoItem