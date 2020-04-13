import React from 'react'
import { Link } from 'gatsby'

import { container, activeLink } from './header.module.scss'

const Header = () => {
    return (
        <header className={container}>

            <nav>
                <h1>Rafael Carvalho</h1>
                <ul>
                    <Link to="/" activeClassName={activeLink}><li>Início</li></Link>
                    <Link to="/blog" activeClassName={activeLink}><li>Blog</li></Link>
                    <Link to="/sobre" activeClassName={activeLink}><li>Sobre</li></Link>
                    <Link to="/contato" activeClassName={activeLink}><li>Contato</li></Link>
                </ul>
            </nav>

        </header>

    )
}

export default Header