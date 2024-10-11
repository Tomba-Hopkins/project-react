/* eslint-disable react/prop-types */
function BillAddUser(props){

    const {btnClose} = props

    return (
        <div className="form-add"
            style={{
                width: '100%',
                position: 'absolute',
                top: '0',
                right: '0',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white/10',
                backdropFilter: 'blur(10px)'
            }}
        >
            <form style={{
                width: '50%',
                height: '50%',
                borderRadius: '0.7rem',
                backgroundColor: '#272727',
                border: '1px solid #646cff',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem'
            }}>
                <p style={{cursor: 'pointer', marginLeft: '10rem'}} onClick={btnClose}>❌</p>
                <input type="text" placeholder="link gambar" required />
                <input type="text" placeholder="Nama..." required />
                <button>Submit</button>
            </form>
        </div>
    )

}

export default BillAddUser