import React from 'react'
import {StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { card } from './projectCard.module.scss'

const ProjectCard = ({title, description, imgPage}) => {
  return (
    <div className={card}>
      <StaticQuery
            query={graphql`
              query {
                allImageSharp {
                  edges {
                    node {
                      fixed(width: 250, height: 200) {
                        ...GatsbyImageSharpFixed
                        originalName
                      }
                    }
                  }
                }
              }
            `}
            render={data => {
              const image = data.allImageSharp.edges.find(
                edge => edge.node.fixed.originalName === imgPage
              )
              if (!image) {
                return null
              }
              return <Img fixed={image.node.fixed} />
            }}
          />
          <div>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
            
          
    </div>
  )
}

export default ProjectCard