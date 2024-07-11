import React, { lazy } from 'react';

const Account = lazy(() => import('../components/dashboard/Account.jsx'));
const TransferAccount = lazy(() => import('../components/dashboard/TransferAccount.jsx'));
const Accounts = lazy(() => import('../components/dashboard/Accounts.jsx'));
const Service = lazy(() => import('../components/dashboard/Service.jsx'));
const Enterprise = lazy(() => import('../components/dashboard/RegisterEnterprise.jsx'))
const RegisterPage = lazy(() => import('../components/dashboard/RegisterPage.jsx'))
const Deposit = lazy(() => import('../components/dashboard/Deposit.jsx'))
const Favorite = lazy(() => import('../components/dashboard/Favorite.jsx'))
const EditProfile = lazy(() => import('../components/dashboard/EditProfile.jsx'))
const Credit = lazy(() => import('../components/dashboard/Credit.jsx'))

const TransferHistory = lazy(() => import('../components/dashboard/TransferHistory.jsx'))

const dashboardRoutes = [
    { path: '/', element: <Credit /> },
    { path: '/accounts', element: <Accounts /> },
    { path: '/create-account', element: <Account /> },
    { path: '/create-user', element: <RegisterPage /> },
    { path: '/transfer', element: <TransferAccount /> },
    { path: '/transaction-history', element: <TransferHistory /> },
    { path: '/services', element: <Service /> },
    { path: '/deposit', element: <Deposit /> },
    { path: '/favorite', element: <Favorite /> },
    { path: '/enterprise', element: <Enterprise /> },
    { path: '/edit-profile', element: <EditProfile /> },


]

export default dashboardRoutes;