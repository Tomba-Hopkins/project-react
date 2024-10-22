import { useEffect, useState } from "react"
import Loading from '../Loading'
import Star from "../Star"

/* eslint-disable react/prop-types */
export default function FilmDetail({handleDetailActive, pilihIdFilm, film_api, setStarRating, handleKoleksiFilm, starRating}){

    const [filmDetail, setFilmDetail] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    
    

    useEffect(() => {
        const fetchDetailFilm = async () => {
            try {
                setIsLoading(true)
                const res = await fetch(`http://www.omdbapi.com/?apikey=${film_api}&i=${pilihIdFilm}`)

                if(!res.ok) throw new Error('Something went wrong')
                
                const data = await res.json()

                if(data.Response === "False") throw new Error('Error')
                
                setFilmDetail(data)
            } catch(err) {
                console.log(err)
                setErrorMsg(err.message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchDetailFilm()
        
    }, [film_api, pilihIdFilm])


    if(isLoading) return <Loading/>
    if(errorMsg) return <p>{errorMsg}</p>
    if(!filmDetail) return <Loading/>
    
    

    const {
        Actors: pemain,
        Title: judul,
        Genre: genre,
        Poster: gambar,
        Language: bahasa,
        Plot: plot,
        Released: rilis,
        Runtime: durasi,
        Director: sutradara,
    } = filmDetail


    const handleAddFilm = () => {

        const newDetail = {
            ...filmDetail,
            Rating: starRating
        }
        
        handleKoleksiFilm(newDetail)
        handleDetailActive()
        setStarRating(0)
    }
    


    
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
            <br />
            <Star setStarRating={setStarRating} />
            {starRating > 0 && <button onClick={handleAddFilm}>Dah nonton</button>}
        </>
    )
}