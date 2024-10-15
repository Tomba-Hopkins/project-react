/* eslint-disable react/prop-types */
import { useState } from "react"

function Star(){

    const [clickRate, setClickRate] = useState(0)

    const handleClick = (point) => {
        setClickRate(point)
    }
    
    
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
                gap: '0.1rem',
                padding: '0.4rem'
            }} className="box-star">
                {Array.from({length: 5}, (_, i) => (
                    <Svg terisi={clickRate >= i + 1} key={i} rateClick={() => handleClick(i + 1)} />
                ))}
            </div>
            <p>{clickRate} stars</p>
        </main>
    )
}


function Svg({rateClick, terisi}){
    return (
        <>
        
            {terisi ? (
                <svg onClick={rateClick} role="button" xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewBox="0 0 21000000 29700000"><path fill="#646cff" stroke="#0CF"  d="m10870110 5440610 1521460 8453450 6085850 5635630-7607310-2817820-7607310 2817820 6085850-5635630z"/></svg>
            ) : (
                <svg onClick={rateClick} role="button" xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewBox="0 0 21000000 29700000"><path fill="#1a1a1a" stroke="#646cff"  d="m10870110 5440610 1521460 8453450 6085850 5635630-7607310-2817820-7607310 2817820 6085850-5635630z"/></svg>
            )}
        
        </>
    )
}

export default Star