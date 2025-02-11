
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
      <main className='min-h-screen flex flex-col justify-center text-center items-center bg-slate-800 text-pink-500 gap-6 font-semibold font-flower tracking-widest'>
        <NowPage pageHandler={pageHandler} />
        {
          page < pages.length - 1 && (
            <button className='px-6 py-1 bg-slate-300 rounded-sm rounded-tl-none rounded-tr-none active:animate-ping active:border-2 border-pink-500' onClick={pageHandler}>💗</button>

          )
        }
      </main>

    </>
  )
}

export default App
