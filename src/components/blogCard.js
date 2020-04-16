import React from 'react'
import {StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import { card } from './blogCard.module.scss'

const BlogCard = ({title, description, imgPage, category, slug}) => {
    return (
      <Link to={slug}>
        <div className={card}>
          <StaticQuery
            query={graphql`
              query {
                allImageSharp {
                  edges {
                    node {
                      fixed(width: 300, height: 200) {
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
          <h4>{title}</h4>
          <p>{description}</p>
          <span>{category}</span>
        </div>
      </Link>
    )
}

export default BlogCard