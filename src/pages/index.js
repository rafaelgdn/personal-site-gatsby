import React from 'react'
import { Link, graphql } from 'gatsby'

import Header from '../components/header'
import BlogCard from '../components/blogCard'
import ProjectCard from '../components/projectCard'
import profilePhoto from '../../content/assets/profilePhoto.jpg'

import {
    container,
    header,
    headerContext,
    headerIcons,
    section,
    sectionContext,
    lfDev,
    divider,
    blogSection,
    blogContext,
    projectSection,
    projectContext
} from './index.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const BlogIndex = ({ data }) => {
    const posts = data.allMarkdownRemark.edges

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
            <section className={blogSection}>
                <h2>Blog</h2>
                <hr />
                <div className={blogContext}>
                    {posts.map(({ node }) => {
                        return (
                            <BlogCard key={node.frontmatter.title}
                                title={node.frontmatter.title}
                                description={node.excerpt}
                                imgPage={node.frontmatter.img}
                                category={node.frontmatter.category}
                            />     
                        )
                    })}                
                </div>
            </section>
            <section className={projectSection}>
                    <h2>Projetos</h2>
                    <hr />
                    <div className={projectContext}>
                        <ProjectCard 
                            title="GoBarber - Bootcamp GoStack, Rocketseat"
                            description="Aplicação para marcação de agendamentos de uma barbearia, foi criada durante o Bootcamp GoStack 8.0 da rocketseat."
                            imgPage="gobarber.png"
                        />
                        <ProjectCard 
                            title="Eletrônica do João - Assitência Técnica"
                            description="Aplicação para cadastro e controle de ordens de serviço, estoque e peças de uma assistência técnica."
                            imgPage="eletronicadojoao.jpg"
                        />
                        
                    </div>
                        <Link to="/">
                            <button>Veja mais...</button>
                        </Link>
            </section>
        </div>
    )
}

export default BlogIndex

export const pageQuery = graphql`
    query {
        allMarkdownRemark(limit: 8, sort: {fields: frontmatter___date, order: DESC}) {
            edges {
                node {
                    frontmatter {
                        category
                        title
                        description
                        img 
                    }
                    excerpt(pruneLength: 75)
                }
            }
        }
    }
`;