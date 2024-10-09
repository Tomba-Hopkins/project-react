import { useState } from "react"

function CreateMenu(){

    const [menu, setMenu] = useState('')
    const [kulkas, setKulkas] = useState([])

    const menuHandler = (e) => setMenu(e.target.value)

    const kulkasHandler = (e) => {
        e.preventDefault()

        if(menu.length > 0 ) {
            const newMenu = {
                id: new Date().getTime(),
                name: menu
            }

            setKulkas(
                [...kulkas, newMenu]
            )

            setMenu('')
        }

    }

    const deleteHandler = (id) => {
       const newKulkas = kulkas.filter((k) => k.id != id)
       setKulkas(newKulkas)
    }
    
    
    return (
        <>
            <h1>Create Menu</h1>

            <form onSubmit={kulkasHandler}>
                <input type="text" value={menu} onChange={menuHandler} />
                <button>Create</button>
            </form>

            <br />

            <ul>
                {kulkas.map((k) => {
                    return (
                        <li key={k.id}>{k.name}<button onClick={() => deleteHandler(k.id)}>Delete</button></li>
                    )
                })}
            </ul>

        </>
    )
}

export default CreateMenu