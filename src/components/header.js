import React from 'react'
import { Link } from 'gatsby'

import { container } from './header.module.scss'

const Header = () => {
    return (
        <header className={container}>

            <nav>
                <h1>Rafael Carvalho</h1>
                <ul>
                    <li>Blog</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>
            </nav>

        </header>

    )
}

export default Header