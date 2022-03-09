import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Comments from './Comments'
import Detailsstyles from './Details.module.css'
import useFetch from '../hooks/useFetch'
import { PostProps, UsersProps } from '../APIResponsesTypes'

const Details = () => {
  const [post, setPost] = useState<PostProps>()
  const [user, setUser] = useState<UsersProps>()

  let params = useParams() as any
  let [postData, loading] = useFetch(
    `https://jsonplaceholder.typicode.com/posts?id=${params.id}`
  )

  let [usersData] = useFetch(
    `https://jsonplaceholder.typicode.com/users`
  ) as any

  useEffect(() => {
    if (!loading) {
      setPost(postData[0])
    }
  }, [loading, postData])

  useEffect(() => {
    if (usersData.length > 0) {
      const author = usersData.find(
        (user: UsersProps) => post.userId === user.id
      )
      setUser(author)
    }
  }, [])

  if (!post) {
    return <h1>...loading</h1>
  }
  if (post) {
    return (
      <div>
        <h1 className={Detailsstyles.header}>{post?.title}</h1>
        <p className={Detailsstyles.body}>{post?.body}</p>
        <h2 className={Detailsstyles.user}>{user?.name}</h2>
        <p className={Detailsstyles.comments}>
          <Comments />
        </p>
      </div>
    )
  }
}
export default Details
