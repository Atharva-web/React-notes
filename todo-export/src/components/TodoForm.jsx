import { useState } from 'react'
import { useTodo } from '../context/TodoContext'


function TodoForm() {
    const [todoText, setTodoText] = useState("")
    
    const { addTodo } = useTodo()

    

    function add(e) {
        e.preventDefault()
        if(todoText === '') {
            return
        }

        addTodo({id: Date.now(), todoText: todoText, completed: false})
        console.log(todoText)
        setTodoText('')
    }

    return (
        <form className='flex justify-center my-6'
            onSubmit={function(e) {
                add(e)
            }}
        >
            <input className='border-2 border-white px-5 py-2 text-2xl'
                type='text' 
                placeholder='enter your todos here...'
                value={todoText} // to clear the form input
                onChange={function(e) {
                    setTodoText(e.target.value)
                }}
            />
            <input className='bg-green-600 px-5 cursor-pointer hover:bg-green-800'
                type='submit'
                value='Add'
            />
        </form>
    )
}

export default TodoForm