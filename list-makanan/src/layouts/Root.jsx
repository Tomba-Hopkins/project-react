import { Link, Outlet } from "react-router-dom"

function Root() {

    return (
        <>
            <Link to="/">Home</Link> | <Link to="/extra">Extra</Link> | <Link to="/about">About</Link>
            <Outlet/>
        </>
    )
    
}

export default Root