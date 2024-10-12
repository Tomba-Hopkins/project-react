/* eslint-disable react/prop-types */
function BillUser(props){

    const {list} = props

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


                        <p>{l.balance > 0 ? `kamu punya utang dengan ${l.name} sebesar ${l.balance}` : l.balance < 0 ? `${l.name} punya utang padamu sebesar ${l.balance}` : `${l.name} dan kamu sama2 gada utang y mari berhutang☕`} </p>
                        <button>Jajan</button>
                    </div>
                )
            })}
        </main>
    )
    
}

export default BillUser