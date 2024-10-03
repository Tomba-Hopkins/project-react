import './App.css'
import Search from './components/Search'
import Content from './components/Content'

import menu from './data/menu.json'

function App() {

  return (
    <>
      <Search/>
      {
        menu.map((props, index) => <Content key={index} {...props} />)
      }
    </>
  )
}

export default App
