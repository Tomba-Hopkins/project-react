/* eslint-disable react/prop-types */
export default function FilmList({listFilm}){
    console.log(listFilm)
    return (
        <>
            {listFilm.map((film) => {
            return <div style={{
                margin: '2rem auto'
            }}
            key={film.imdbID}>

                    <h2>{film.Title}</h2>
                    <img src={film.Poster} alt={film.Title} />
                    <p>{film.Year}</p>
                    <hr style={{border: '1px solid white'}} />


                </div>
            }) }
        </>
        
    )
}