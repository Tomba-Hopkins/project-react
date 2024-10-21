/* eslint-disable react/prop-types */

import { useState } from "react"


function Star({setStarRating}){

    
    const [clickRate, setClickRate] = useState(0)
    const [tempRate, setTempRate] = useState(0)

    const handleClick = (point) => {
        setClickRate(point)
        setStarRating(point)
    }
    
    
    return (
        <main style={{
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                display: 'flex',
                cursor: 'pointer'
            }} className="box-star">
                {Array.from({length: 10}, (_, i) => (
                    <Svg terisi={ tempRate ? tempRate >= i + 1 : clickRate >= i + 1} key={i} out={() => setTempRate(0)} inn={() => setTempRate(i + 1)} rateClick={() => handleClick(i + 1)}/>
                ))}
            </div>
            <p>{ tempRate || clickRate || ''} stars</p>
        </main>
    )
}


function Svg({rateClick, terisi, inn, out}){
    return (
        <>
        
           <span onClick={rateClick} onMouseEnter={inn} onMouseLeave={out}>
            {terisi ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 21000000 29700000"><path fill="#646cff" stroke="#0CF"  d="m10870110 5440610 1521460 8453450 6085850 5635630-7607310-2817820-7607310 2817820 6085850-5635630z"/></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 21000000 29700000"><path fill="#1a1a1a" stroke="#646cff"  d="m10870110 5440610 1521460 8453450 6085850 5635630-7607310-2817820-7607310 2817820 6085850-5635630z"/></svg>
            )}
           </span>
        
        </>
    )
}

export default Star