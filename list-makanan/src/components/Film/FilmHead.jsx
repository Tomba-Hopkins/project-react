/* eslint-disable react/prop-types */
import { useState } from "react"

export default function FilmHead({setKeyword}){

    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (search.length > 0) {
            setKeyword(search)
            setSearch("")
        } else {
            document.querySelector('.kosong').textContent = "Jangan Kosong lah"
        }
    }
    
    return (
        <>
            <header style={{
                marginTop: '3rem'
            }}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="search">Search Film 🍔</label>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" id="search" />
                    <button>🔎</button>
                    <span className="kosong" style={{marginLeft: '1rem', color: 'red'}}></span>
                </form>
            </header>
        </>
    )
}