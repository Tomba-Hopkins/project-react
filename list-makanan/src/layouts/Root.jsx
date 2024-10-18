import { NavLink, Outlet } from "react-router-dom"

import '../styles/style.css'
import { useEffect, useState } from "react"

function Root() {

    const buka = 10
    const tutup = 22
    const jam = new Date().getHours()
    const status = jam < buka || jam > tutup ? 'Tutup' : 'Buka'

    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <nav style={{
                marginTop: '2rem'
            }}>
                <NavLink className={({isActive, isPending}) => {
                    return isActive ? "active" : isPending ? "pending" : ""
                }} to="/"> Home </NavLink> |
                <NavLink to="/extra"> Extra </NavLink> |
                <NavLink to="/about"> About </NavLink> | 
                <NavLink to="/create"> Create </NavLink> |
                <NavLink to="/todo"> Todo </NavLink> |
                <NavLink to="/bill"> Bill </NavLink> |
                <NavLink to="/film"> Film </NavLink> 
                <span><small>{time}</small></span>
                <br />
                <small>
                    Buka: {buka} AM <br />
                    Tutup: {tutup} PM <br />
                    Status: <strong>{status}</strong>
                </small>
                </nav>
            <Outlet/>
        </>
    )
    
}

export default Root