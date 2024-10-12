function BillForm(){
    return (
        <main>
            <h2>Patungan Bareng</h2>
            <form>
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