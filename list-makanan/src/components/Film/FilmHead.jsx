import { useState } from "react"

export default function FilmHead({api}){

    const [keyword, setKeyword] = useState('')
    
    return (
        <>
            <header style={{
                marginTop: '3rem'
            }}>
                <form>
                    <label htmlFor="search">Search Film 🍔</label>
                    <input value={keyword} onChange={(e) => setKeyword(e.target.value)} type="text" id="search" />
                    <button>🔎</button>
                </form>
            </header>
        </>
    )
}