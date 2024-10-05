import { NavLink, Outlet } from "react-router-dom"

import '../styles/style.css'
import { useEffect, useState } from "react"

function Root() {



    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <NavLink className={({isActive, isPending}) => {
                return isActive ? "active" : isPending ? "pending" : ""
            }} to="/"> Home </NavLink> |
            <NavLink to="/extra"> Extra </NavLink> |
            <NavLink to="/about"> About </NavLink>
            <span><small>{time}</small></span>
            <Outlet/>
        </>
    )
    
}

export default Root