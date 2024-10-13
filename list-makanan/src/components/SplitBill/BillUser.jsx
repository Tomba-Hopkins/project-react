/* eslint-disable react/prop-types */
function BillUser(props){

    const {list,onJajanBtn} = props

    return (
        <main>
            {list.map((l, index) => {
                return (
                    <div style={{
                        display: 'flex',
                        padding: '1rem',
                        gap: '2rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '1rem'
                    }} key={l.id} className="list-orang">
                        <p>{index + 1}</p>
                        <img style={{
                            width: '5rem',
                            height: '5rem',
                            borderRadius: '50%'
                        }} src={l.img} alt={l.name} />
                        <h3>{l.name}</h3>


                        <p style={{
                            color: `${l.balance > 0 ? 'lime' : l.balance < 0 ? 'red' : ''}`
                        }}>{l.balance > 0 ? `${l.name} punya utang dengan mu sebesar Rp.${l.balance}` : l.balance < 0 ? `kamu punya utang pada ${l.name} sebesar Rp.${-l.balance}` : `${l.name} dan kamu sama2 gada utang y mari berhutang☕`} </p>
                        <button onClick={() => onJajanBtn(l.id)}>Jajan</button>
                    </div>
                )
            })}
        </main>
    )
    
}

export default BillUser