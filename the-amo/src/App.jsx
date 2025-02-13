
import { useState } from 'react'
import './styles.css'
import { First } from './components/First'
import { Second } from './components/Second'
import { motion } from 'motion/react'
import { Third } from './components/Third'



const words = ["beautiful", "kind", "smartgirl"]
const pages = [First, Second, Third]


function App() {

  const [page, setPage] = useState(0)
  const [correct, setCorrect] = useState(false)
  const NowPage = pages[page]
  const [appear, setAppear] = useState([])


  const pageHandler = () => {
    if (page != pages.length - 1) {
      setAppear((b) => [...b, words[page]])
      setPage((p) => p + 1)
      setCorrect(false)
    }
  }


  const submitHandler = ans => {
    if (ans == words[page]) {
      setCorrect(true)
    }
  }


  return (
    <>

      <main className='min-h-screen flex flex-col overflow-x-hidden justify-center text-center items-center bg-slate-800 text-pink-500 gap-6 font-semibold font-flower tracking-widest'>
        <nav className='p-2 my-10'>
          {page > 0 && (
            <p>{page}/{words.length}</p>
          )}
          <div className='p-2 flex gap-2'>
            {appear.map((a, i) => (
              <p className='bg-pink-500 text-slate-100 p-2' key={i}>{a}</p>
            ))}
          </div>
        </nav>
        <NowPage correct={correct} submitHandler={submitHandler} pageHandler={pageHandler} setCorrect={setCorrect} />
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
