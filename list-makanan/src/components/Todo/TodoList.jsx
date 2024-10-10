import { useState } from "react"

/* eslint-disable react/prop-types */
function TodoList(props){

    const { itemTodo, hapusTodo, centangTodo } = props

    const [sortBy, setSortBy] = useState('input')

    const sortHandler = () => {
        switch(sortBy) {
            case 'title':
                return itemTodo.slice().sort((a, b) => a.title.localeCompare(b.title))
            case 'status':
                return itemTodo.slice().sort((a, b) => Number(a.done) - Number(b.done))
            case 'input':
                default:
                    return itemTodo
        }
    }

    const sortedItem = sortHandler()
    
    
    return (
        <>

            <div className="list" style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                gap: '2rem',
                marginTop: '2rem'
            }}>

            <p style={{textAlign: 'center', width: '100%'}}>Sort by</p>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={{textAlign: 'center', width: '100%', padding: '1rem', marginBottom: '3rem'}}> 
                <option value="title">Title</option>
                <option value="status">Status</option>
                <option value="input">Input</option>
            </select>

                {sortedItem.map((item) => {
                    return (
                        <div key={item.id}>
                            <span
                            style={{
                                textDecoration: item.done ? 'line-through' : ''
                            }}
                            >{item.title}</span>
                            <input onChange={() => centangTodo(item.id)} value={item.done} type="checkbox" />
                            <button onClick={() => hapusTodo(item.id)}>❌</button>
                        </div>
                    )
                })}

            </div>
            
        
        </>
    )
}


export default TodoList