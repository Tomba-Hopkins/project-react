import { useEffect, useState } from "react"

/* eslint-disable react/prop-types */
export default function FilmDetail({handleDetailActive, pilihIdFilm, film_api}){

    const [filmDetail, setFilmDetail] = useState()
    

    useEffect(() => {
        const fetchDetailFilm = async () => {
            const res = await fetch(`http://www.omdbapi.com/?apikey=${film_api}&i=${pilihIdFilm}`)
            const data = await res.json()
            setFilmDetail(data)
        }

        fetchDetailFilm()
        
    }, [film_api, pilihIdFilm])

    const {
        Actors: pemain,
        Title: judul,
        Genre: genre,
        Poster: gambar,
        Language: bahasa,
        Plot: plot,
        Released: rilis,
        Runtime: durasi,
        Director: sutradara
    } = filmDetail
    
    console.log(filmDetail)

    
    return (
        <>
            <button onClick={handleDetailActive}>❌</button>
            <h2>{judul}</h2>
            <img src={gambar} alt={judul} />
            <p>{rilis}</p>
            <p>Language: {bahasa}</p>
            <p>Durasi: {durasi}</p>
            <p>Diperankan oleh: {pemain}</p>
            <p>Disutradari oleh: {sutradara}</p>
            <small>Genre: {genre}</small>
            <hr />
            <small>
            <em>{plot}</em>
            </small>
        </>
    )
}