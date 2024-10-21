/* eslint-disable react/prop-types */
export default function FilmCollection({koleksiFilm}){
    return (
        <>
            <section>
                {koleksiFilm.map((film) => {
                    return (
                        <>
                            <p>{film.Title}</p>
                            <small>{film.Rating}</small>
                        </>
                    )
                })}
            </section>
        </>
    )
}