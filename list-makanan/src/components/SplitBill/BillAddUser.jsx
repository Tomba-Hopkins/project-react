import { useState } from "react"

/* eslint-disable react/prop-types */
function BillAddUser(props){

    const {btnClose,addFriend} = props
    const [newName, setNewName] = useState('')
    const [newImage, setNewImage] = useState('https://tomba-hopkins.github.io/Warung-Sidi/img/products/1.jpg')

    const formHandle = (e) => {

        e.preventDefault()
        
        const newFriend = {
            id: new Date().getTime(),
            name: newName,
            img: newImage,
            balance: 0
        }

        addFriend(newFriend)
        setNewImage('')
        setNewName('')
        btnClose()
    }

    return (
        <div className="form-add"
            style={{
                width: '100%',
                position: 'fixed',
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
            <form onSubmit={formHandle} style={{
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
                <input onChange={(e) => setNewName(e.target.value)} value={newName} type="text" placeholder="Nama..." required />
                <input onChange={(e) => setNewImage(e.target.value)} value={newImage} type="text" placeholder="link gambar" required />
                <button>Submit</button>
            </form>
        </div>
    )

}

export default BillAddUser