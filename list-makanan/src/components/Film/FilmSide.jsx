/* eslint-disable react/prop-types */
export default function FilmSide({children}){
    return (
        <section style={{
            overflowY: 'scroll',
            width: '50%',
            padding: '1rem'
        }}>
            {children}
        </section>
    )
}
