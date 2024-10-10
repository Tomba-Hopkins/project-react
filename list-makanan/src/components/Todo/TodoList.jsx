/* eslint-disable react/prop-types */
function TodoList(props){

    const { itemTodo, hapusTodo, centangTodo } = props
    
    
    return (
        <div className="list" style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            gap: '2rem',
            marginTop: '2rem'
        }}>

            {itemTodo.map((item) => {
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
    )
}


export default TodoList