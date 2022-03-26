import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from "next/router";

import logo from '../../public/logo.png';

function Navbar({ navbarClass }) {

    const navbarRef = useRef(null);
    const router = useRouter();

    const hamburguerHandler = (e) => {

        if (e.target.checked) {
            navbarRef.current.classList.add("navbar-tabs-active")
        } else {
            navbarRef.current.classList.remove("navbar-tabs-active")
        }
    }

    return (
        <React.Fragment>
            <div className={`navbar ${navbarClass ? navbarClass : ''}`} >

                <div className="navbar-icon">

                    <div className={"navbar-icon-img"}>
                        <Image
                            src={logo}
                            alt="Logo"
                            title="Logo"
                        />
                    </div>

                    <div className="hamburguer-container">
                        <input className="hamburguer-button" type="checkbox" onChange={hamburguerHandler} />
                        <span className='span1'></span>
                        <span className='span2'></span>
                        <span className='span3'></span>
                    </div>

                </div>

                <div ref={navbarRef} className="navbar-tabs">

                    <Link href="/">
                        <a
                            className={router.pathname == "/" ? "active" : ""
                            }>
                            Home
                        </a>
                    </Link>

                    <Link href="/about">
                        <a
                            className={router.pathname == "/about" ? "active" : ""
                            }>
                            About us
                        </a>
                    </Link>

                    <Link href="/contact">
                        <a
                            className={router.pathname == "/contact" ? "active" : ""
                            }>
                            Contact
                        </a>
                    </Link>

                </div>

            </div>

            <ToastContainer />

        </React.Fragment>

    );
}

export default Navbar;