import React from 'react'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import Header from './Header'
import OurOwnRoutes from './OurOwnRoutes'
import styles from './Header.module.css'


function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
                <Header/>
                <OurOwnRoutes/>
        </div>
    )
}

export default HW5
