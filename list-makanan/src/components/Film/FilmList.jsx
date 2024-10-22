/* eslint-disable react/prop-types */

import Loading from '../Loading'
import './film.css'

export default function FilmList({listFilm, setPilihIdFilm, handleDetailActive, isLoading}){
    
    const handleClickBox = (id) => {
        setPilihIdFilm(id)
        handleDetailActive()
    }


    if(isLoading) return <Loading/>


    
    return (
        <>
            {listFilm.map((film) => {
            return <div onClick={() => handleClickBox(film.imdbID)} className="box"
            key={film.imdbID}>

                    <h3>{film.Title}</h3>
                    <img src={film.Poster} alt={film.Title} />
                    <p>{film.Year}</p>


                </div>
            }) }
        </>
        
    )
}