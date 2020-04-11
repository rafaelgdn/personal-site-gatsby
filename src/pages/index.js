import React from 'react'

import Header from '../components/header'

import { container, header } from './index.module.scss'


const BlogIndex = () => {
    return (
        <div className={container}>
            <div className={header}>
                <Header />
            </div>
        </div>
    )
}

export default BlogIndex