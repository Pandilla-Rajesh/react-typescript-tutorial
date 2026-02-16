import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage/LandingPage'
import MainLayout from '../LayOut/MainLayout'
import Login from '../Components/Login/Login'

export const Approutes = () => {

    const router = createBrowserRouter([

        { index: true, element: (<Suspense fallback={<div>...Loading</div>}><LandingPage /></Suspense>) },
        { path: 'landing', element: (<Suspense fallback={<div>...Loading</div>}><LandingPage /></Suspense>) },
        {
            path: '/', element: (<Suspense fallback={<div>...Loading</div>}><MainLayout /></Suspense>),

            children: [
                { path: 'login', element: (<Suspense fallback={<div>...Loading</div>}><Login /></Suspense>) }
            ]
        }
    ])

    return <RouterProvider router={router} />
}
export default LandingPage