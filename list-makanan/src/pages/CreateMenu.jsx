import { useState } from "react"

import VisiMisi from "../components/VisiMisi/VisiMisi"

function CreateMenu(){

    const [menu, setMenu] = useState('')
    const [kulkas, setKulkas] = useState([])
    const [harga, setHarga] = useState(0)
    const [tipe, setType] = useState('none')

    const menuHandler = (e) => setMenu(e.target.value)

    const hargaHandler = (e) => setHarga(e.target.value)

    const typeHandler = (e) => setType(e.target.value)
    

    const kulkasHandler = (e) => {
        e.preventDefault()

        if(menu.length > 0 ) {
            const newMenu = {
                id: new Date().getTime(),
                name: menu,
                price: harga,
                type: tipe
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

            <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} onSubmit={kulkasHandler}>
                <input required type="text" value={menu} placeholder="bakso" onChange={menuHandler} />
                <input required type="number" placeholder="10k" onChange={hargaHandler} />
                <select required onChange={typeHandler}>
                    <option value="none" hidden disabled>
                        pilih kategori 🍛
                    </option>
                    <option value="junkfood">Junkfood</option>
                    <option value="drink">Drink</option>
                    <option value="healthy">Healthy</option>
                    <option value="dessert">Dessert</option>
                </select>
                <button>Create</button>
            </form>

            <br />

            <ul>
                {kulkas.map((k) => {
                    return (
                        <>
                            <li style={{listStyle: "none"}} key={k.id}>
                                <span style={{margin: "0 2rem"}}>{k.name}</span>
                                <span style={{margin: "0 2rem"}}>{k.price}K</span>
                                <span style={{margin: "0 2rem"}}> <em>{k.type}</em> </span>
                                <button onClick={() => deleteHandler(k.id)}>Delete</button>
                            </li>
                            
                        </>
                    )
                })}
            </ul>





                <VisiMisi/>

        </>
    )
}

export default CreateMenu