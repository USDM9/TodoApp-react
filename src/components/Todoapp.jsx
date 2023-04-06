import { useState } from "react"
import { Todo } from "./Todo"
import './todoApp.css'


export const Todoapp = () => {
    const [todos, setTodos] = useState([])
    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        const value = e.target.value
        setTitle(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const ids = todos.map(todo => todo.id)
        const maxId = ids.length === 0 ? 1 : Math.max(...ids) 
        
        const newTodo = {
            id: maxId + 1,
            title,
            completed: false
        }

        const temp = [...todos]
        temp.unshift(newTodo)

        setTodos(temp)
        setTitle('')
    }

    const handleUpdate = (id, value) => {
        const temp = [...todos]
        const item = temp.find(item => item.id === id)
        item.title = value
        setTodos(temp)
    }

    const handleDelete = (id) => {
        const temp = todos.filter(item => item.id !== id)
        setTodos(temp)
    }

    return <div className="todoContainer">
        <form onSubmit={handleSubmit} className='todoCreateForm'>
            <input className="todoInput" onChange={handleChange} value={title} />
            <input type='submit' value='Create to do' className="buttonCreate" onClick={handleSubmit}/>
        </form>
        <div className="todosContainer">
           {todos.length > 0 && todos.map(todo => <Todo key={todo.id} item={todo} onUpdate={handleUpdate} onDelete={handleDelete}/>)}
        </div>

    </div>
}