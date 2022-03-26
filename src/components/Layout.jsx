import React from 'react'

import Navbar from './Navbar';

export default function Layout({ navbar, children, navbarClass }) {


    if (navbar === true) {

        return (
            <div className='body'>
                <Navbar navbarClass={navbarClass} />
                <div className='content'>
                    {children}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='body'>
                <div className='content'>
                    {children}
                </div>
            </div>
        )
    }
}
