import React, { lazy } from 'react';

const Account = lazy(() => import('../pages/AccountPage.jsx'));
const TransferAccount = lazy(() => import('../pages/TransferAccountPage.jsx'));
const Accounts = lazy(() => import('../components/dashboard/Accounts.jsx'))
const Service = lazy(() => import('../pages/ServicePage.jsx'));

const dashboardRoutes = [
    { path: '/accounts', element: <Accounts /> },
    { path: '/create-account', element: <Account /> },
    { path: '/transfer', element: <TransferAccount /> },

]

export default dashboardRoutes;