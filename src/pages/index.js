import React from 'react'

import Home from "./Home";


// import '../src/css/normalize.css'

export default function Main() {

    const consoleLog = () => {
        console.log(`%c Hi!`, 'background: #000000; color: #db0a0a');
    }

    consoleLog()

    return (
        <Home />
    );
}
