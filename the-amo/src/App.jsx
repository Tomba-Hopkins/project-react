
import { useState } from 'react'
import './styles.css'
import { First } from './components/First'
import { Second } from './components/Second'
import { motion } from 'motion/react'


// const words = ["beautiful"]
const pages = [First, Second]


function App() {

  const [page, setPage] = useState(0)
  const [correct, setCorrect] = useState(false)
  const NowPage = pages[page]


  const pageHandler = () => {
    if (page != pages.length - 1) {
      setPage((p) => p + 1)
    }
  }


  return (
    <>
      <main className='min-h-screen flex flex-col justify-center text-center items-center bg-slate-800 text-pink-500 gap-6 font-semibold font-flower tracking-widest'>
        <NowPage pageHandler={pageHandler} setCorrect={setCorrect} />
        {
          correct && page < pages.length - 1 && (
            <motion.button animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, ease: 'easeIn', duration: 2 }} className='px-6 py-1 bg-slate-300 rounded-sm rounded-tl-none rounded-tr-none active:animate-ping active:border-2 border-pink-500' onClick={pageHandler}>💗</motion.button>

          )
        }
      </main>

    </>
  )
}

export default App
