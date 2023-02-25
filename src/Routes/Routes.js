
import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../Layouts/DashboardLayout'
import Main from '../Layouts/Main'
import Dashboard from '../Pages/Dashboard/Dasboard/Dashboard'
import Home from '../Pages/Home/Home/Home'
import LogIn from '../Pages/LogIn/LogIn'
import Register from '../Pages/Register/Register'
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
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    }
])