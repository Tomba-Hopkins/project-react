/* eslint-disable react/prop-types */
import { useState } from "react"
import Tab from "./Tab"
import VisiTrap from './VisiTrap'
import VisiContent from './VisiContent'

export default function VisiTab({isi}){

    const [tabAct, setTabAct] = useState(0)
    
    
    return (
        <>
            <main style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem'
            }}>
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


                {
                    // at itu buat nentuin sesuai index keknya
                    tabAct <= 2 ? <VisiContent item={isi.at(tabAct)} /> : <VisiTrap isi={isi}/> 

                    // kalau dikasih key state likes nya gabakal kesimpen pas pindah
                    // tabAct <= 2 ? <VisiContent key={isi.at(tabAct).id} item={isi.at(tabAct)} /> : <VisiTrap isi={isi}/> 
                }
            </main>
        
        </>


    )
}