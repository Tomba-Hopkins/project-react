import { NavLink, Outlet } from "react-router-dom"

import '../styles/style.css'

function Root() {

    return (
        <>
            <NavLink className={({isActive, isPending}) => {
                return isActive ? "active" : isPending ? "pending" : ""
            }} to="/"> Home </NavLink> |
            <NavLink to="/extra"> Extra </NavLink> |
            <NavLink to="/about"> About </NavLink>
            <Outlet/>
        </>
    )
    
}

export default Root