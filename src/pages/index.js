import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import profilePhoto from '../../content/assets/profilePhoto.jpg'

import {
    container,
    header,
    headerContext,
    headerIcons,
    section,
    sectionContext,
    lfDev,
    divider
} from './index.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const BlogIndex = () => {
    return (
        <div className={container}>
            <div className={header}>
                <Header />
                <div className={headerContext}>
                    <div>
                        <img src={profilePhoto} alt="Profile" aria-label="Avatar" />
                    </div>
                    <div>
                        <p>
                            Oi. Meu nome é Rafael Carvalho e sou desenvolvedor
                            ReactJS, NodeJS.<br /><span>Desafios me motivam!</span>
                        </p>
                    </div>
                </div>
                <div className={headerIcons}>
                    <div>
                        <a href="https://github.com/">
                            <FontAwesomeIcon icon={faGithub} />
                            <span>GitHub</span>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/">
                            <FontAwesomeIcon icon={faLinkedin} />
                            <span>Linkedin</span>
                        </a>
                    </div>
                </div>
            </div>
            <section className={section}>
                <div className={sectionContext}>
                    <div className={lfDev}>
                        <h3>Procurando por um desenvolvedor?</h3>
                        <p>Veja alguns dos projetos que participei com uma breve explicação e o código fonte no GitHub.</p>
                        <Link to="/">
                            <button>Quero conhecer</button>
                        </Link>
                    </div>
                    <div className={divider}>
                        <hr />
                    </div>
                    <div>
                        <h3>Precisa aprender?</h3>
                        <p>Visite meu blog e fique por dentro das novidades na area do desenvolvimento web e mobile.</p>
                        <Link to="/">
                            <button>Quero conhecer</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogIndex