// import BillForm from "../components/SplitBill/BillForm"
import { useState } from "react"
import BillUser from "../components/SplitBill/BillUser"
import BillAddUser from "../components/SplitBill/BillAddUser"
import BillForm from "../components/SplitBill/BillForm"

function SplitBill(){

    const [addBtn, setAddBtn] = useState(false)
    const [listFriend, setListFriend] = useState([])
    const [jajanBtn, setJajanBtn] = useState(false)

    const addBtnHandler = () => {
        setAddBtn(!addBtn)
    }

    const jajanBtnHandler = () => {
        setJajanBtn(!jajanBtn)
    }

    const addListFriend = (friend) => {

        // const newFriend = [...listFriend, friend]
        // setListFriend(newFriend)
        
        setListFriend((before) => [...before, friend])
    }
    
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
                <BillUser onJajanBtn={jajanBtnHandler} list={listFriend} />

                <button onClick={addBtnHandler} style={{
                    width: '40%',
                }}>Add User</button>
               

            </main>
            
            {addBtn && <BillAddUser addFriend={addListFriend} btnClose={addBtnHandler} />}
            {jajanBtn && <BillForm btnClose={jajanBtnHandler} />}

        </>
    )
}

export default SplitBill