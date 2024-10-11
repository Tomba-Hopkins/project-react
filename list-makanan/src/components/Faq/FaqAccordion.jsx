/* eslint-disable react/prop-types */
export default function FaqAccordion(props){

    const {no, que, ans, ygDiKlik, setKlik} = props

    const isOpen = no === ygDiKlik

    const handlerColapes = () => {
        setKlik(isOpen ? null : no)
    }
    
    
    return (
        <main style={{display: 'flex', flexDirection: 'column', padding: '1rem'}}>
                <div onClick={handlerColapes} className="barang" style={{
                backgroundColor: '#272727',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                gap: '2rem',
                borderRight: `${isOpen ? '1px solid #646cff' : ''}`,
                borderBottom: `${isOpen ? '1px solid #646cff' : ''}`
            }}>
                <p>{no < 10 ? `0${no}` : no}</p>
                <p>{que}</p>
                <p>{isOpen ? '-' : '+'}</p>

                {isOpen && <div style={{
                    width: '100%'
                }} className="answer">
                    {ans}
                </div>}
            </div>
        </main>
    )
}
