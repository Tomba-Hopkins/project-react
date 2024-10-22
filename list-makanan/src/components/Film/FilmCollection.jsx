/* eslint-disable react/prop-types */
export default function FilmCollection({koleksiFilm}){
    return (
        <>
            <section>
                <h2>M Y Collection 👺</h2>
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