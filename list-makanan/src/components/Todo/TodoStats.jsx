/* eslint-disable react/prop-types */
function TodoStats({todo}){

    if(todo.length == 0) {
        return <small>Create some task king 👺</small>
    }

    const totalTask = todo.length
    const doneTask = todo.filter((t) => t.done).length
    const percent = Math.round((doneTask/totalTask) * 100)
    
    
    return (
        <small>
            {totalTask === doneTask ? 'Mission Complete 👍' : `${doneTask}/${totalTask} Completed🔎(${percent}%)`}
        </small>
    )
}

export default TodoStats