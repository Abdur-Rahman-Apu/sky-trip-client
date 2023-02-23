
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import Home from '../Pages/Home/Home/Home'
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
            }
        ]
    }
])