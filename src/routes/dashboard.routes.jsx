import React, { lazy } from 'react';

const Account = lazy(() => import('../components/dashboard/Account.jsx'));
const TransferAccount = lazy(() => import('../components/dashboard/TransferAccount.jsx'));
const Accounts = lazy(() => import('../components/dashboard/Accounts.jsx'))
const Service = lazy(() => import('../components/dashboard/Service.jsx'))
const RegisterPage = lazy(() => import('../components/dashboard/RegisterPage.jsx'))

const dashboardRoutes = [
    { path: '/accounts', element: <Accounts /> },
    { path: '/create-account', element: <Account /> },
    { path: '/create-user', element: <RegisterPage /> },
    { path: '/transfer', element: <TransferAccount /> },
    { path: '/services', element: <Service /> },

]

export default dashboardRoutes;