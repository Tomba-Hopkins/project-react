import { createBrowserRouter } from 'react-router-dom'

import Root from '../layouts/Root'
import Home from '../pages/Home'
import Tambahan from '../pages/Tambahan'
import DetailMeal from '../pages/detail/_id'
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
                path: '/extra/:meal_id',
                element: <DetailMeal/>
            },
            {
                path: '/about',
                element: <About/>
            }
        ]

    }
])