import './App.css'
import Search from './components/Search'
import Content from './components/Content'
import Tambahan from './components/Tambahan'

import menus from './data/menu.json'
import { useState } from 'react'
import { GlobalContext } from './context'

function App() {

  const [menu, setMenu] = useState(menus)

  const cari = (val) => {
    const filteredMenu = menus.filter((m) => m.name.includes(val))
    setMenu(filteredMenu)

  }


  const namaCucu = {
    name: "State Management Kids😎",
    age: 5,
    message: "Hello grandpa"
  }


  return (
    <>
      <GlobalContext.Provider value={namaCucu}>
         <Search nyari={cari} />
      </GlobalContext.Provider>

      {
        menu.map((props, index) => <Content key={index} {...props} />)
      }
      <hr />
      <h2>Extra Menu</h2>
      <Tambahan/>
    </>
  )
}

export default App
