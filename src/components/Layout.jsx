import React from 'react'

import Navbar from './Navbar';

export default function Layout({ children, navbarClass }) {
    return (
        <div className='body'>
            <Navbar navbarClass={navbarClass} />
            <div className='content'>
                {children}
            </div>
        </div>
    )
}