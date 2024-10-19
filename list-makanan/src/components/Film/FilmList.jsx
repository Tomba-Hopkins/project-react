/* eslint-disable react/prop-types */

import './film.css'

export default function FilmList({listFilm, setPilihIdFilm, handleDetailActive}){
    
    const handleClickBox = (id) => {
        setPilihIdFilm(id)
        handleDetailActive()
    }
    
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