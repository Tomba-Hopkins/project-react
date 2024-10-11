function SplitBill(){
    return (
        <>
            <header style={{
                margin: '5rem 0',
                borderBottom: '1px solid #646cff',
                padding: '0.9rem'
            }}>
                <h1 style={{
                    background: 'linear-gradient(to right, #646cff, #272727)',
                    backgroundClip: 'text',
                    color: 'transparent'
                }}>Split Bill</h1>
                <small>Patungan app buat patungan</small>
            </header>

            <main style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                padding: '0.7rem',
                borderLeft: '1px solid #646cff',
            }}>

            </main>
        </>
    )
}

export default SplitBill