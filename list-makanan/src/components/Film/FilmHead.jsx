export default function FilmHead(){
    return (
        <header style={{
            marginTop: '3rem'
        }}>
            <form>
                <label htmlFor="search">Search Film 🍔</label>
                <input type="text" id="search" />
                <button>🔎</button>
            </form>
        </header>
    )
}