import './App.css'

import { GlobalContext } from './context'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routes'

function App() {


  const namaCucu = {
    name: "State Management Kids😎",
    age: 5,
    message: "Hello grandpa"
  }


  return (
    <>
      <GlobalContext.Provider value={namaCucu}>
         <RouterProvider router={routers} />
      </GlobalContext.Provider>

      
    </>
  )
}

export default App
