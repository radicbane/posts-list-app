import React from 'react'
import Poststyles from './Post.module.css'
import { Link } from 'react-router-dom'

const Post = (posts) => {
  return (
    <div className={Poststyles.container}>
      <h1 className={Poststyles.header}>{posts.title}</h1>
      <p>{posts.body}</p>
      <Link to={`/posts/${posts.id}`}>
        <button className={Poststyles.button}>More details</button>
      </Link>
    </div>
  )
}

export default Post
