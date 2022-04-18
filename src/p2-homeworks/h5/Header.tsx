import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './OurOwnRoutes'

function Header() {
    return (
        <header>
                <NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink>---
                <NavLink to={PATH.JUNIOR}>Junior</NavLink>---
                <NavLink to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>
        </header>
    )
}

export default Header
