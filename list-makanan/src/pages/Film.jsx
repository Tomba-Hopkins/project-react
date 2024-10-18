/* eslint-disable no-undef */
import FilmHead from "../components/Film/FilmHead"
import FilmSide from "../components/Film/FilmSide"
import FilmList from "../components/Film/FilmList"
import FilmCollection from "../components/Film/FilmCollection"

function Film(){

    const FILM_API_KEY = process.env.FILM_API_KEY

    return (
        <>
            <FilmHead api={FILM_API_KEY}/>

            <main style={{
                width: '100%',
                display: 'flex',
                border: '1px solid red',
                padding: '1rem',
                margin: '3rem auto'
            }}>
                <FilmSide>
                    <FilmList/>
                </FilmSide>

                <FilmSide>
                    <FilmCollection/>
                </FilmSide>
            </main>
        </>
    )
}

export default Film