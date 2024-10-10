import { useState } from "react"

import TodoForm from "../components/Todo/TodoForm"
import TodoList from "../components/Todo/TodoList"

const datas = [
    {
        id: 1,
        title: 'HOHO',
        done: true
    },
    {
        id: 2,
        title: 'Hehe',
        done: true
    },
]

function Todo() {

    // const [boxTodo, setBoxTodo] = useState([])
    const [boxTodo, setBoxTodo] = useState(datas)

    const addTodo = (task) => {
        // const newTodo = [...boxTodo, task]
        // setBoxTodo(newTodo)

        // or
        setBoxTodo((before) => [...before, task])
    }


    const removeTodo = (id) => {
        // const newBoxTodo = boxTodo.filter((box) => box.id !== id)
        // setBoxTodo(newBoxTodo)

        // or
        setBoxTodo(before => before.filter((item) => item.id !== id))
    }


    const doneTodo = (id) => {
        // const newBoxTodo = boxTodo.map((item) => {
        //     if(item.id === id) {
        //         return {
        //             ...item,
        //             done: !item.done
        //         }
        //     }
        //     return item
        // })
        // setBoxTodo(newBoxTodo)

        // or 
        setBoxTodo((before) => before.map((item) => {
            if(item.id === id) {
                return {
                    ...item,
                    done: !item.done
                }
            }
            return item
        }))
    }

    return (
        <>
            <h1>Todo List</h1>
            <p>Wanna add some task sir🦖</p>
            <TodoForm nambahTodo={addTodo} />
            <TodoList itemTodo={boxTodo} hapusTodo={removeTodo} centangTodo={doneTodo} />
        </>
    )
}

export default Todo