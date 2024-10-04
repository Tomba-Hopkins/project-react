import { createBrowserRouter } from 'react-router-dom'

import Root from '../layouts/Root'
import Home from '../pages/Home'
import Tambahan from '../pages/Tambahan'
import About from '../pages/About'


export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/extra',
                element: <Tambahan/>
            },
            {
                path: '/about',
                element: <About/>
            }
        ]

    }
])