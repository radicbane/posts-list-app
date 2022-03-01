import Poststyles from './Post.module.css'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Post = (posts, id) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch()
  }, [])

  const fetch = async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments`
      )
      setComments(data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    const commentPost = comments.filter((comment) => comment.postId === id)
    setComments(commentPost)
  }, [comments, id])

  return (
    <div className={Poststyles.container}>
      <h1 className={Poststyles.header}>{posts.title}</h1>
      <p>{posts.body}</p>
      <Link to={`/posts/${posts.id}`}>
        <button className={Poststyles.button}>More details</button>
      </Link>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p className={Poststyles.comments}>{comment.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Post
