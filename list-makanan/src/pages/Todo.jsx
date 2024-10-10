import { useState } from "react"

import TodoForm from "../components/Todo/TodoForm"
import TodoList from "../components/Todo/TodoList"
import TodoStats from "../components/Todo/TodoStats"

const datas = [
    {
        id: 1,
        title: 'HOHO',
        done: false
    },
    {
        id: 2,
        title: 'Hehe',
        done: false
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

    const resetTodo = () => {
        const confirm = window.confirm('Serius mo di apus semua? 🤖')
        if(confirm) setBoxTodo([])
    }

    return (
        <>
            <h1>Todo List</h1>
            <p>Wanna add some task sir🦖</p>
            <TodoForm nambahTodo={addTodo} />
            <TodoList resetTodo={resetTodo} itemTodo={boxTodo} hapusTodo={removeTodo} centangTodo={doneTodo} />
            <TodoStats todo={boxTodo} />
        </>
    )
}

export default Todo