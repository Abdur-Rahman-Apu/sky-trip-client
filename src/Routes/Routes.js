
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import Home from '../Pages/Home/Home/Home'
import LogIn from '../Pages/LogIn/LogIn'
import Error from '../Pages/Shared/Error/Error'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
        ]
    }
])