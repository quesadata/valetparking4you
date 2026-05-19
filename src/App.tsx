import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/layout/layout';
import Home from './pages/home';
import Services from './pages/services';
import About from './pages/about';
import Contact from './pages/contact';
import Reserve from './pages/reserve';
import Faq from './pages/faq';
import './i18n';
import Insurance from './pages/insurance';

const router = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'services', element: <Services /> },
            { path: 'insurance', element: <Insurance /> },
            { path: 'gallery', element: <div className="p-20 text-center text-4xl">Client List Coming Soon</div> }, // quick stub for missing gallery
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
            { path: 'reserve', element: <Reserve /> },
            { path: 'faq', element: <Faq /> },
        ],
    },
]);

export default function App() {
    return (
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
    );
}
