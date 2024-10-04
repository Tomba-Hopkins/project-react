import { createBrowserRouter } from 'react-router-dom'

import Root from '../layouts/Root'
import Home from '../pages/Home'
import Tambahan from '../pages/Tambahan'
import DetailMeal from '../pages/detail/_id'
import About from '../pages/About'

import NotFound from '../components/Notfound'

import { allmeal, mealById } from '../services/loaders'



export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/extra',
                element: <Tambahan/>,
                loader: allmeal
            },
            {
                path: '/extra/:meal_id',
                element: <DetailMeal/>,
                loader: mealById
            },
            {
                path: '/about',
                element: <About/>
            }
        ]

    }
])