import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage/LandingPage'

export const Approutes = () => {

    const router = createBrowserRouter([

        { index: true, element: (<Suspense fallback={<div>...Loading</div>}><LandingPage /></Suspense>) },
        { path: 'landing', element: (<Suspense fallback={<div>...Loading</div>}><LandingPage /></Suspense>) }
    ])

    return <RouterProvider router={router}></RouterProvider>
}
export default LandingPage