/* eslint-disable react/prop-types */

import AnaknyaSearch from "./AnakDariSearch"

function Search(props){

    // const [search, setSearch] = useState("")
    // const mencari = (e) => {
    //     console.log(e.target.value)
    //     setSearch(e.target.value)
    // }

    const mencari = (e) => {
        props.nyari(e.target.value)
    }

    return (
        <>
            <h2>Search</h2>
            <input onChange={mencari} type="text" />
            <br />
            <AnaknyaSearch/>
        </>
    )
}


export default Search