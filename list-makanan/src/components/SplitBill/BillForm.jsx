/* eslint-disable react/prop-types */
function BillForm(props){

    const {btnClose} = props
    
    
    return (
        <main style={{
            width: '100%',
                position: 'fixed',
                top: '0',
                right: '0',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white/10',
                backdropFilter: 'blur(10px)',
                flexDirection: 'column',
        }}>
            <h2>Patungan Bareng</h2>
            <p onClick={btnClose}>❌</p>
            <form style={{
                width: '80%',
                height: '80%',
                borderRadius: '0.7rem',
                backgroundColor: '#272727',
                border: '1px solid #646cff',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
            }}>
                <label htmlFor="">Total Pengeluaran</label>
                <input type="text" />


                <label htmlFor="">Pengeluaran mu</label>
                <input type="text" />

                <label htmlFor="">Pengeluaran name</label>
                <input type="text" />


                <label htmlFor="">Ditolong oleh</label>
                <select>
                    <option value="kamu">kamu</option>
                </select>

                <button>Submit</button>

            </form>
        </main>
    )
}

export default BillForm