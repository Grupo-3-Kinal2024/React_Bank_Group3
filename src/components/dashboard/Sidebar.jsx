import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = ({ children }) => {
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
                <div className="drawer-content min-h-[calc(100vh-64px)]">
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-300 text-base-content min-h-full w-80 p-4 ">
                        <li><Link to='/dashboard/'>SA</Link></li>
                        <li><Link to='/dashboard/transfer'>Transfer</Link></li>
                        <li><Link to='/dashboard/create-account'>Crear Cuenta</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
