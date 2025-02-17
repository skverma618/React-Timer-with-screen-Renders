import React from 'react'
import { createBrowserRouter } from 'react-router-dom'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Home</h1>
    },
    {
        path: '/about',
        element: <h1>ABOUT</h1>
    },
    {
        path: '/services',
        children: [
            {
                path: '',
                element: <h1>Services</h1>
            },
            {
                path: 'web',
                children: [
                    {
                        path: '',
                        element: <h1>Web Development</h1>
                    },
                    {
                        path: 'design',
                        element: <h1>Web Design</h1>
                    }
                ]
            }]
    },
    {
        path: '/contact',
        element: <h1>Contact</h1>
    }
])