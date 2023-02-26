
import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../Layouts/DashboardLayout'
import Main from '../Layouts/Main'
import AllCompany from '../Pages/Dashboard/Admin/AllCompany/AllCompany'
import AllUser from '../Pages/Dashboard/Admin/AllUser/AllUser'
import AddFlight from '../Pages/Dashboard/Company/AddFlight/AddFlight'
import AllFlight from '../Pages/Dashboard/Company/AllFlight/AllFlight'
import BookedFlight from '../Pages/Dashboard/Company/BookedFlight/BookedFlight'
import Dashboard from '../Pages/Dashboard/Dasboard/Dashboard'
import Home from '../Pages/Home/Home/Home'
import LogIn from '../Pages/LogIn/LogIn'
import PasswordReset from '../Pages/LogIn/PasswordReset'
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
            {
                path: '/resetPassword',
                element: <PasswordReset></PasswordReset>
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
            },
            {
                path: '/dashboard/allCompany',
                element: <AllCompany></AllCompany>
            },
            {
                path: '/dashboard/allUser',
                element: <AllUser></AllUser>
            },
            {
                path: '/dashboard/addFlight',
                element: <AddFlight></AddFlight>
            },
            {
                path: '/dashboard/allFlight',
                element: <AllFlight></AllFlight>
            },
            {
                path: '/dashboard/bookedFlight',
                element: <BookedFlight></BookedFlight>
            },
        ]
    }
])