function Star(){
    return (
        <main style={{
            margin: '2rem auto',
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                display: 'flex',
                gap: '0.5rem',
                padding: '0.4rem'
            }} className="box-star">
                <Svg/>
            </div>
            <p>x stars</p>
        </main>
    )
}


function Svg(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewBox="0 0 21000000 29700000"><path fill="#00A2E9" stroke="#0CF"  d="m10870110 5440610 1521460 8453450 6085850 5635630-7607310-2817820-7607310 2817820 6085850-5635630z"/></svg>
    )
}

export default Star