import React, { lazy } from 'react';

const Home = lazy(() => import('../pages/HomePage.jsx'));

const mainRoutes = [
    { path: '/', element: <Home /> }
]

export default mainRoutes;