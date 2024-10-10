import { useState } from "react"

import TodoForm from "../components/Todo/TodoForm"
import TodoList from "../components/Todo/TodoList"

function Todo() {

    const [boxTodo, setBoxTodo] = useState([])

    const addTodo = (task) => {
        // const newTodo = [...boxTodo, task]
        // setBoxTodo(newTodo)

        // or
        setBoxTodo((before) => [...before, task])
    }

    return (
        <>
            <h1>Todo List</h1>
            <p>Wanna add some task sir🦖</p>
            <TodoForm nambahTodo={addTodo} />
            <TodoList itemTodo={boxTodo}/>
        </>
    )
}

export default Todo