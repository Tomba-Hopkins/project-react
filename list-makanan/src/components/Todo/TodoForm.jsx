/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react"

function TodoForm(props){

    const { nambahTodo } = props
    
    
    const [task, useTask] = useState('')

    const handleTask = (e) => {
        useTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(task.length > 0) {
            const newTask = {
                id: new Date().getTime(),
                title: task,
                done: false
            }
    
            nambahTodo(newTask)
        }

        useTask('')
        
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={task} onChange={handleTask} type="text" />
                <button>Add Task</button>
            </form>
        </>
    )
    
    
}

export default TodoForm