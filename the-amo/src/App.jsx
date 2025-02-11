
import { useState } from 'react'
import './styles.css'
import { First } from './components/First'
import { Second } from './components/Second'


const pages = [First, Second]


function App() {

  const [page, setPage] = useState(0)
  const NowPage = pages[page]


  const pageHandler = () => {
    if (page != pages.length - 1) {
      setPage((p) => p + 1)
    }
  }


  return (
    <>
      <NowPage pageHandler={pageHandler} />
    </>
  )
}

export default App
