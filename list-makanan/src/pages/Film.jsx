/* eslint-disable no-undef */
import FilmHead from "../components/Film/FilmHead"
import FilmSide from "../components/Film/FilmSide"
import FilmList from "../components/Film/FilmList"
import FilmCollection from "../components/Film/FilmCollection"
import { useEffect, useState } from "react"

function Film(){
    const film_api = import.meta.env.VITE_FILM_API_KEY




    const [listFilm, setListFilm] = useState([])
    const [keyword, setKeyword] = useState('barbie')

    useEffect(() => {

        const fetchFilm = async () => {
            const res = await fetch(`http://www.omdbapi.com/?apikey=${film_api}&s=${keyword}`)
            const data = await res.json()
            setListFilm(data.Search)
        }

        fetchFilm()
        
        
    }, [film_api, keyword])

    return (
        <>
            <FilmHead setKeyword={setKeyword} api={film_api}/>

            <main style={{
                width: '100%',
                display: 'flex',
                border: '1px solid red',
                padding: '1rem',
                margin: '3rem auto'
            }}>
                <FilmSide>
                    <FilmList listFilm={listFilm} />
                </FilmSide>

                <FilmSide>
                    <FilmCollection/>
                </FilmSide>
            </main>
        </>
    )
}

export default Film