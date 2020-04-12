import React from 'react'

import Header from '../components/header'
import profilePhoto from '../../content/assets/profilePhoto.jpg'

import { container, header, headerContext, headerIcons } from './index.module.scss'

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
        </div>
    )
}

export default BlogIndex