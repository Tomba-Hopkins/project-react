/* eslint-disable react/prop-types */
export default function FilmDetail({handleDetailActive, filmTerpilih}){

    console.log(filmTerpilih)
    
    return (
        <>
            <p>Detail</p>
            <button onClick={handleDetailActive}>❌</button>
        </>
    )
}