import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout'
import Home from './Routes/Home'
import Auth from './Routes/Auth'
import AuthProvider from './Context/AuthProvider'
import AddService from './Routes/AddService'
import AllServices from './Routes/AllServices'
import Details from './Routes/Details'
import ManageService from './Routes/ManageService'
import PrivateRoute from './PrivateRoute'
import BookedService from './Routes/BookedService'
import ServiceToDo from './Routes/ServiceToDo'
import Error from './Routes/Error'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            { index: true, element: <Home></Home> },
            {
                path: "/services",
                element: <AllServices></AllServices>
            }, 
            {
                path: "/auth", 
                element: <Auth></Auth>
            }, 
            {
                path: "/add-service", 
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            }, 
            {
                path: "/details/:id", 
                element: <PrivateRoute><Details></Details></PrivateRoute>
            }, 
            {
                path: "/manage-service", 
                element: <PrivateRoute><ManageService></ManageService></PrivateRoute>
            }, 
            {
                path: "/booked-service", 
                element: <PrivateRoute>
                    <BookedService></BookedService>
                </PrivateRoute>
            }, 
            {
                path: "/service-to-do",
                element: <PrivateRoute>
                    <ServiceToDo></ServiceToDo>
                </PrivateRoute>
            }, 
            {
                path: "*", 
                element: <Error></Error>
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    </StrictMode>,
)
