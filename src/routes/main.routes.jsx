import React, { lazy } from 'react';

const Home = lazy(() => import('../pages/HomePage.jsx'));
const Account = lazy(() => import('../pages/AccountPage.jsx'));

const mainRoutes = [
    { path: '/', element: <Home /> },
    { path: '/account', element: <Account />}
]

export default mainRoutes;