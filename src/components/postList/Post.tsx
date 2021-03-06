import Poststyles from './Post.module.css'
import { Link } from 'react-router-dom'
import React, { useEffect, useState, FunctionComponent } from 'react'
import useFetch from '../../hooks/useFetch'
import { PostProps } from '../../APIResponsesTypes'

const Post: FunctionComponent<PostProps> = (posts) => {
  const [comments, setComments] = useState([])
  const [postComments, setPostComments] = useState([])

  let [commentsData] = useFetch(
    `https://jsonplaceholder.typicode.com/comments`
  ) as any

  useEffect(() => {
    if (commentsData.length > 0) {
      setComments(commentsData)
    }
  }, [commentsData])

  useEffect(() => {
    const commentPost = comments.filter(
      (comment) => comment.postId === posts.id
    )
    setPostComments(commentPost)
  }, [comments, posts.id])

  return (
    <div className={Poststyles.container}>
      <h1 className={Poststyles.header}>{posts.title}</h1>
      <p>{posts.body}</p>
      <Link to={`/posts/${posts.id}`}>
        <button className={Poststyles.button}>More details</button>
      </Link>
      {postComments.map((comment) => (
        <div key={comment.id}>
          <p className={Poststyles.comments}>{comment.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Post
