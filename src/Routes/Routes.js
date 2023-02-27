
import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../Layouts/DashboardLayout'
import Main from '../Layouts/Main'
import Contact from '../Pages/Contact/Contact'
import AllCompany from '../Pages/Dashboard/Admin/AllCompany/AllCompany'
import AllUser from '../Pages/Dashboard/Admin/AllUser/AllUser'
import Cart from '../Pages/Dashboard/Buyer/Cart/Cart'
import PaidFlight from '../Pages/Dashboard/Buyer/PaidFlight/PaidFlight'
import Payment from '../Pages/Dashboard/Buyer/Payment/Payment'
import AddFlight from '../Pages/Dashboard/Company/AddFlight/AddFlight'
import AllFlight from '../Pages/Dashboard/Company/AllFlight/AllFlight'
import BookedFlight from '../Pages/Dashboard/Company/BookedFlight/BookedFlight'
import Dashboard from '../Pages/Dashboard/Dasboard/Dashboard'
import Flight from '../Pages/Flight/Flight/Flight'
import Home from '../Pages/Home/Home/Home'
import SearchFlight from '../Pages/Home/Search/SearchFlight'
import LogIn from '../Pages/LogIn/LogIn'
import PasswordReset from '../Pages/LogIn/PasswordReset'
import Register from '../Pages/Register/Register'
import Error from '../Pages/Shared/Error/Error'
import PrivateRoute from './PrivateRoute'

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
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/resetPassword',
                element: <PasswordReset></PasswordReset>
            },
            {
                path: '/searchFlight',
                element: <SearchFlight></SearchFlight>
            },
            {
                path: '/flight',
                element: <PrivateRoute><Flight></Flight></PrivateRoute>
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
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/dashboard/allCompany',
                element: <PrivateRoute><AllCompany></AllCompany></PrivateRoute>
            },
            {
                path: '/dashboard/allUser',
                element: <PrivateRoute><AllUser></AllUser></PrivateRoute>
            },
            {
                path: '/dashboard/addFlight',
                element: <PrivateRoute><AddFlight></AddFlight></PrivateRoute>
            },
            {
                path: '/dashboard/allFlight',
                element: <PrivateRoute><AllFlight></AllFlight></PrivateRoute>
            },
            {
                path: '/dashboard/bookedFlight',
                element: <PrivateRoute><BookedFlight></BookedFlight></PrivateRoute>
            },
            {
                path: '/dashboard/cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: '/dashboard/paidFlight',
                element: <PrivateRoute><Flight></Flight></PrivateRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
            },
            {
                path: '/dashboard/userPaid',
                element: <PrivateRoute><PaidFlight></PaidFlight></PrivateRoute>
            },
        ]
    }
])