import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import db from "./firebase"


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
      <p>Loading...</p>
    )
  }

  return (
    <>

      <h1>Simple dulu</h1>
      <p>Harga: {data.harga?.toLocaleString()}</p>
      <p>Stock: {data.stock == 0 ? "Kosong / belum layak jual" : data.stock}</p>
    </>
  )
}
