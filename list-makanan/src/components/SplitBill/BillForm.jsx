import { useState } from "react"

/* eslint-disable react/prop-types */
function BillForm(props){

    const {btnClose, jajanUserId, listFriend, setListFriend} = props
    // console.log(jajanUserId)

    const [total,setTotal] = useState()
    const [urCost, setUrCost] = useState()
    const [ygBayar, setYgBayar] = useState('')

    const user = listFriend.filter((friend) => friend.id === jajanUserId)[0]
    console.log(user, user.balance)

    const balanceCalculation = (balanceBefore) => {
        console.log(ygBayar,user.name)
        console.log(ygBayar === user.name)
        return ygBayar === user.name ? balanceBefore -= urCost : balanceBefore += (total - urCost)
    }

    const formHandler = (e) => {
        e.preventDefault()
        
        setListFriend((before) => before.map((friend) => {
            if(friend.id === jajanUserId) {
                return {
                    ...friend,
                    balance: balanceCalculation(friend.balance)
                }
            }
            return friend
        }))
        btnClose()
    }

    
    
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
            <h2>Patungan Bareng {user.name} </h2>
            <form onSubmit={formHandler} style={{
                width: '70%',
                height: '70%',
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
                <p style={{cursor: 'pointer', marginLeft: '15rem'}} onClick={btnClose}>❌</p>
                <div style={{display: 'flex', gap: '2rem'}} className="input">
                    <label htmlFor="total">Total Pengeluaran</label>
                    <input placeholder="total biaya..." required id="total" value={total} type="number" onChange={(e) => setTotal(e.target.value)} />
                </div>

                <div style={{display: 'flex', gap: '2rem'}} className="input">
                    <label htmlFor="ur-cost">Pengeluaran mu</label>
                    <input placeholder="jajan mu berapa..." required id="ur-cost" value={urCost} type="number" onChange={(e) => setUrCost(e.target.value)} />
                </div>



                <div style={{display: 'flex', gap: '2rem'}} className="input">
                    <label htmlFor="">Pengeluaran name</label>
                    <input type="number" readOnly disabled placeholder={total && urCost ? total - urCost : ''} />
                </div>


                <div style={{display: 'flex', gap: '2rem'}} className="input">
                    <label htmlFor="">Ditolong oleh</label>
                    <select value={ygBayar} onChange={(e) => setYgBayar(e.target.value)} required>
                        <option value="" disabled hidden>Pilih</option>
                        <option value="kamu">kamu</option>
                        <option value={user.name}>{user.name}</option>
                    </select>
                </div>

                <button>Submit</button>

            </form>
        </main>
    )
}

export default BillForm