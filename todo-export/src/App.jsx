import { useEffect, useState } from 'react'
import { TodoProvider } from './context/TodoContext'
import { TodoForm, TodoItem } from './components/index'

function App() {
	const [todos, setTodos] = useState([])

	function addTodo(todo) {
		setTodos(function(prevTodos) {
			return [...prevTodos, todo]
		})
	}

	function updateTodo(id, todo) {
		setTodos(function(prevTodos) {
			prevTodos.map(function(prevTodo) {
				if(prevTodo.id === id) {
					prevTodo.id = todo.id
					prevTodo.todoText = todo.todoText
				}
			})
		})
	}

	function deleteTodo(id) {
		// re-renders every item except for the deleted item
		setTodos(function(prevTodos) {
			return prevTodos.filter(function(prevTodo) {
				if(prevTodo.id !== id) {
					return prevTodo
				} 
			})
		})
	}

	function toggleComplete(id) {
		// toggle behaviour
	}

	return (
		<TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
			<h1 className='text-center text-white text-4xl my-10'>To-Do List</h1>
			<div>
				<TodoForm />
				{
					todos.map(function(todo) {
						return <TodoItem key={todo.id} todo={todo} /> // renders component for every array item
					})
				}
			</div>
		</TodoProvider>
	)  
}

export default App
