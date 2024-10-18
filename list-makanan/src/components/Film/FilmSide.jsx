/* eslint-disable react/prop-types */
export default function FilmSide({children}){
    return (
        <section style={{
            overflowY: 'auto',
            width: '50%',
            padding: '1rem',
            maxHeight: '20rem'
        }}>
            {children}
        </section>
    )
}
