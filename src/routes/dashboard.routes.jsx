import React, { lazy } from 'react';

const Account = lazy(() => import('../pages/AccountPage.jsx'));
const Login = lazy(() => import('../pages/LoginPage.jsx'))
const TransferAccount = lazy(() => import('../pages/TransferAccountPage.jsx'));
const Service = lazy(() => import('../pages/ServicePage.jsx'));

const dashboardRoutes = [
    { path: '/create-account', element: <Account /> },
    { path: '/transfer', element: <TransferAccount /> },
    { path: '/loginpagina', element: <Login /> }

]

export default dashboardRoutes;