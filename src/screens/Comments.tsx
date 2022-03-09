import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

const Comments = () => {
  const [comments, setComments] = useState([])
  let params = useParams() as any

  let [commentsData, loading] = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
  ) as any
  useEffect(() => {
    if (!loading) {
      setComments(commentsData)
    }
  }, [commentsData, loading])

  if (!comments) {
    return <h1>...loading</h1>
  }
  if (comments)
    return (
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    )
}

export default Comments
