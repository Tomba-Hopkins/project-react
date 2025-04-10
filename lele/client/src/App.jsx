import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import db from "./firebase"


import { motion } from 'motion/react'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import le from '@/assets/le.png'


const CardMotion = motion.create(Card)




export default function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "lele", "vL8Oa10aQuuXo7VQUIjT")
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setData(docSnap.data())
      } else {
        console.log('gada data')
      }
    }

    fetchData()

  }, [])


  if (!data) {
    return (
      <main className="bg-gray-800 text-neutral-200 flex h-screen items-center justify-center">
        <p>Loading...</p>
      </main>
    )
  }

  return (
    <main className="overflow-x-hidden py-8 min-h-screen flex flex-col items-center md:gap-6 gap-4 grow  p-4 md:p-8 pb-0 bg-gray-800">

      <motion.h1 className="p-2 px-8 md:w-1/3 text-3xl text-center md:text-6xl bg-gradient-to-r from-stone-800 via-40% via-sky-300 to-gray-900 bg-clip-text text-transparent font-bold "
        animate={{ translateX: [0, 100, 0, -70, 0] }}
        transition={{ duration: 4, ease: 'easeIn', repeat: Infinity, repeatDelay: 1 }}
      >Lele Dana</motion.h1>

      <motion.img animate={{ scale: [1, 0.3, 1.2, 1] }} transition={{ ease: 'easeIn', repeat: Infinity, duration: 2 }} src={le} alt="lele" className="my-8 w-1/2 md:w-32 rounded-md md:grayscale-100 hover:grayscale-0 transition-all duration-300" />

      <div className="flex my-32 md:flex-row flex-col gap-8">
        <CardMotion className="w-full max-w-md bg-gray-800 border-sky-700 text-sky-100 shadow-lg" initial={{ scale: 0 }} whileInView={{ scale: 1 }} >
          <CardHeader>
            <CardTitle className="text-sky-300">Harga Terkini</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-2xl font-semibold">
              Rp{data.harga?.toLocaleString()} / kg
            </div>
            <Button className="w-full bg-sky-700 hover:bg-sky-800">
              Rp{data.harga?.toLocaleString()}
            </Button>
          </CardContent>
        </CardMotion>



        <CardMotion className="w-full max-w-md bg-gray-800 border-sky-700 text-sky-100 shadow-lg" initial={{ scale: 0 }} whileInView={{ scale: 1 }}>
          <CardHeader>
            <CardTitle className="text-sky-300">Stock Terkini</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-2xl font-semibold">
              {data.stock == 0 ? 'Kosong' : data.stock}
            </div>
            <Button className="w-full bg-sky-700 hover:bg-sky-800">
              {data.stock == 0 ? 'Kosong' : data.stock}
            </Button>
          </CardContent>
        </CardMotion>
      </div>


      <h1 className="p-2 px-8 md:w-1/3 text-3xl text-center md:text-6xl bg-gradient-to-r from-stone-800 via-40% via-sky-300 to-gray-900 bg-clip-text text-transparent font-bold "
      >Contact</h1>
      <div className="w-full my-8 text-stone-50 text-xs h-32 bg-stone-900 rounded-sm p-4 flex flex-col">

      </div>



      <footer className="text-xs text-stone-300">
        Copyright 2025&copy;
      </footer>
    </main >
  )
}
