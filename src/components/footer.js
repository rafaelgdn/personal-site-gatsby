import React from 'react';
import {StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { footer, footerIcons } from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={footer}>
        <Link to="/">
            <div>
              <StaticQuery
                  query={graphql`
                    query {
                      file(relativePath: { eq: "profilePhoto.jpg" }) {
                        childImageSharp {
                          fixed(width: 80, height: 80) {
                            ...GatsbyImageSharpFixed
                          }
                        }
                      }
                    }
                  `}            
                  render={data => <Img fixed={data.file.childImageSharp.fixed} alt="profile" />}
                />
                <h3>Rafael Carvalho</h3>
            </div>
          </Link>
      <div className={footerIcons}>
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
      <div>
        <p>
          Copyright <span>©</span> 2020 Rafael Carvalho, Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer