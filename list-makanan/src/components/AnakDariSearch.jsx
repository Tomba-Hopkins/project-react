import { useContext } from "react"
import { GlobalContext } from "../context"

function AnaknyaSearch() {
    const data = useContext(GlobalContext)

    return (
        <>
            <small>Hallo aku adalah {data.name} <br />im {data.age} YO <br /> <em>{data.message}</em> </small>
        </>
    )
    
}

export default AnaknyaSearch