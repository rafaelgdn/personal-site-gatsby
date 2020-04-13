import React from 'react'

import { card } from './blogCard.module.scss'

const BlogCard = ({title, description, img, category}) => {
    return (
        <div className={card}>
          <img src={img} alt="blog post" />
          <h4>{title}</h4>
          <p>{description}</p>
          <span>{category}</span>
          <div></div>
        </div>
    )
}

export default BlogCard