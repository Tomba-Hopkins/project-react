import { useState } from "react"
import Tab from "./Tab"

export default function VisiTab(){

    const [tabAct, setTabAct] = useState(0)
    
    
    return (
        <>
            <div className="tabs" style={{
                width: "100%",
                padding: '1rem',
                borderRadius: '0.2rem',
                display: 'flex',
                gap: '1rem',
                justifyContent: 'space-evenly'
            }}>
                <Tab no={0} tabAct={tabAct} setTabAct={setTabAct} />
                <Tab no={1} tabAct={tabAct} setTabAct={setTabAct} />
                <Tab no={2} tabAct={tabAct} setTabAct={setTabAct} />
                <Tab no={3} tabAct={tabAct} setTabAct={setTabAct} />
            </div>
        
        </>


    )
}