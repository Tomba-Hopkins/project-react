import { useEffect, useState } from "react"

/* eslint-disable react/prop-types */
export default function FilmCollection({koleksiFilm}){

    const [avgRating, setRating] = useState(0)
    const [sumDurasi, setSumDurasi] = useState(0)

    useEffect(() => {

        if(koleksiFilm.length > 0) {
            // console.log(koleksiFilm[0])
            const sum = koleksiFilm.reduce((acc, film) => acc + film.Rating, 0)
            const sumDurasi = koleksiFilm.reduce((acc, film) => acc + parseInt(film.Runtime), 0)
            const avg = sum / koleksiFilm.length
            setSumDurasi(sumDurasi)
            setRating(avg)
        }

    }, [koleksiFilm])
    
    
    
    return (
        <>
            <section>
                <h2>M Y Collection 👺</h2>
                <h3>Summary</h3>
                <p>⭐ {avgRating} | ⌛ {sumDurasi.toFixed()} min</p>

                {koleksiFilm.map((film, index) => {                    
                    return (
                        <div key={index} className="koleksi">
                            <p>{index + 1}</p>
                            <p>{film.Title}</p>
                            <img src={film.Poster} alt={film.Title} />
                            <p>⭐{film.Rating}</p>
                        
                        </div>
                    )
                })}
            </section>
        </>
    )
}