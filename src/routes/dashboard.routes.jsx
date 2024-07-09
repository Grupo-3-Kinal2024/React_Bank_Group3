import React, { lazy } from 'react';

const Account = lazy(() => import('../pages/AccountPage.jsx'));
const Login = lazy(() => import('../pages/LoginPage.jsx'))

const dashboardRoutes = [
    { path: '/create-account', element: <Account /> },
    { path: '/loginpagina', element: <Login /> }

]

export default dashboardRoutes;