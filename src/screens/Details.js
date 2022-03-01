import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BeatLoader from 'react-spinners/BeatLoader'
import Comments from './Comments'
import Detailsstyles from './Details.module.css'

function Details() {
  const [post, setPost] = useState({})
  const [users, setUsers] = useState({})
  const [user, setUser] = useState({})
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const params = useParams()

  useEffect(() => {
    setLoading(true)
    setTimeout(1000)
  }, [])

  // useEffect(() => {
  //   const author = users.find((user) => post.userId === user.id)
  //   if (!loading) {
  //     setUser(author)
  //   }
  // }, [post.userId, users, loading])

  async function getUsers() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const json = await response.json()
    setLoading(false)
    setUsers(json[0]).catch((error) => {
      setLoading(false)
      setError(true)
      console.log(error)
    })
  }

  async function getPost() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?id=${params.id}`
    )
    const json = await response.json()
    setLoading(false)
    setPost(json[0]).catch((error) => {
      setLoading(false)
      setError(true)
      console.log(error)
    })
  }

  async function getComments() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
    )
    const json = await response.json()
    setLoading(false)
    setComments(json).catch((error) => {
      setLoading(false)
      setError(true)
      console.log(error)
    })
  }

  useEffect(() => {
    getPost()
    getUsers()
    getComments()
  }, [])

  if (loading) {
    return <BeatLoader />
  }
  return (
    <div>
      {error && <div>Error fetching data.</div>}
      <h1 className={Detailsstyles.header}>{post?.title}</h1>
      <p className={Detailsstyles.body}>{post?.body}</p>
      <h2 className={Detailsstyles.user}>{users?.name}</h2>
      <p className={Detailsstyles.comments}>
        <Comments comments={comments} />
      </p>
    </div>
  )
}

export default Details
