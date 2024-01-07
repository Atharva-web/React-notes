import { createContext, useContext } from 'react'

const todoContext = createContext({
    todos: [
        {
            id: Date.now(),
            todoText: "todo msg",
            completed: false
        }
    ],

    addTodo: function(todo){},
    updateTodo: function(id, todo){},
    deleteTodo: function(id){},
    toggleComplete: function(id){}
})

const TodoProvider = todoContext.Provider

function useTodo() {
    return useContext(todoContext)
}

export {
    todoContext,
    TodoProvider,
    useTodo
}