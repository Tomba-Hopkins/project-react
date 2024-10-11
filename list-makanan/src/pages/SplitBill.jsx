// import BillForm from "../components/SplitBill/BillForm"
import { useState } from "react"
import BillUser from "../components/SplitBill/BillUser"
import BillAddUser from "../components/SplitBill/BillAddUser"

function SplitBill(){

    const [addBtn, setAddBtn] = useState(false)

    const addBtnHandler = () => {
        setAddBtn(!addBtn)
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
                <BillUser/>

                <button onClick={addBtnHandler} style={{
                    width: '40%'
                }}>Add User</button>
               

            </main>

            {addBtn && <BillAddUser btnClose={addBtnHandler} />}
        </>
    )
}

export default SplitBill