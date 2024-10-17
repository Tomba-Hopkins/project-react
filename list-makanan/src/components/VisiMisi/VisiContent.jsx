import { useState } from "react"

/* eslint-disable react/prop-types */
export default function VisiContent({item}){


    const [likes, setLikes] = useState(0)
    const [showBox, setShowBox] = useState(true)

    const memberiLaiks = () => {
        setLikes(likes + 1)
    }

    const memberi3Laiks = () => {
        setLikes((l) => l + 1)
        setLikes((l) => l + 1)
        setLikes((l) => l + 1)
    }
    
    
    
    return (
        <section>
            <h2>{item.title}</h2>
            {showBox && <p>{item.body}</p>}
            <button onClick={() => setShowBox(!showBox)}>{showBox ? 'Sembunyikan' : 'Tampilkan'}</button>
            <button onClick={memberiLaiks} style={{
                marginLeft: '3rem',
                cursor: 'pointer'
            }}>👍</button>
            <button onClick={memberi3Laiks} style={{
                marginRight: '1rem',
                cursor: 'pointer'
            }}>👍👍👍</button>
            <span>{likes} Likes</span>
        </section>
    )
}