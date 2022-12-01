/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../images/logo.svg'

const Header = () => {
    return <header className='header'>
        <figure className='header__figure'>
            <img className='header__img' src={logo} alt="logo" />
        </figure>

        <nav className='nav'>
            <a className='nav__link' href="">Features</a>
            <a className='nav__link' href="">Team</a>
            <a className='nav__link' href="">Sign In</a>
        </nav>
    </header>
}

export default Header