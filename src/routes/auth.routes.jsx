import React, { lazy } from 'react'

const Login = lazy(() => import('../pages/LoginPage'));
const Register = lazy(() => import('../pages/RegisterPage'));

const authRoutes = [
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> }
]

export default authRoutes;
