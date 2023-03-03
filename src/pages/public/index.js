import React from 'react';
const Home = React.lazy(() => import('pages/public/Landing'));
const AboutUs = React.lazy(() => import('pages/public/Aboutus'));
const ContactUs = React.lazy(() => import('pages/public/Contactus'));
export const publicRouteConfig = [
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/about-us',
        element: <AboutUs />,
    },
    {
        path: '/service',
        element: <AboutUs />,
    },
    {
        path: '/contact-us',
        element: <ContactUs />,
    },
]