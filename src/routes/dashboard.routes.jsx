import React, { lazy } from 'react';

const Account = lazy(() => import('../components/dashboard/Account.jsx'));
const TransferAccount = lazy(() => import('../components/dashboard/TransferAccount.jsx'));
const Accounts = lazy(() => import('../components/dashboard/Accounts.jsx'));
const Service = lazy(() => import('../components/dashboard/Service.jsx'));
const Enterprise = lazy(() => import('../components/dashboard/RegisterEnterprise.jsx'))
const RegisterPage = lazy(() => import('../components/dashboard/RegisterPage.jsx'))
const Deposit = lazy(() => import('../components/dashboard/Deposit.jsx'))

const TransferHistory = lazy(() => import('../components/dashboard/TransferHistory.jsx'))

const dashboardRoutes = [
    { path: '/accounts', element: <Accounts /> },
    { path: '/create-account', element: <Account /> },
    { path: '/create-user', element: <RegisterPage /> },
    { path: '/transfer', element: <TransferAccount /> },
    { path: '/transfer-history', element: <TransferHistory /> },
    { path: '/services', element: <Service /> },
    { path: '/deposit', element: <Deposit /> },
      { path: '/enterprise', element: <Enterprise /> },
]

export default dashboardRoutes;