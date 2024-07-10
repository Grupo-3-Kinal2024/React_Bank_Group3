import React, { lazy } from 'react';
const Home = lazy(() => import('../pages/HomePage.jsx'));
const Account = lazy(() => import('../pages/AccountPage.jsx'));
const TransferAccount = lazy(() => import('../pages/TransferAccountPage.jsx'));
const Service = lazy(() => import('../pages/ServicePage.jsx'));
const Favorite = lazy(() => import('../pages/FavoritePage.jsx'))

const mainRoutes = [
    { path: '/', element: <Home /> },
    { path: '/createAccount', element: <Account />},
    { path: '/transferAccount', element: <TransferAccount />},
    { path: '/service', element: <Service />},
    { path: '/favorite', element: <Favorite />}
]

export default mainRoutes;