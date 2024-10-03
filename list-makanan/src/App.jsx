import './App.css'
import Search from './components/Search'
import Content from './components/Content'

import menus from './data/menu.json'
import { useState } from 'react'

function App() {

  const [menu, setMenu] = useState(menus)

  const cari = (val) => {
    const filteredMenu = menus.filter((m) => m.name.includes(val))
    setMenu(filteredMenu)

  }


  return (
    <>
      <Search nyari={cari} />
      {
        menu.map((props, index) => <Content key={index} {...props} />)
      }
    </>
  )
}

export default App
