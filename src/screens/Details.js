import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import BeatLoader from 'react-spinners/BeatLoader'
import Comments from './Comments'
import Detailsstyles from './Details.module.css'

function Details() {
  const [post, setPost] = useState({})
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [comments, setComments] = useState([])
  // const query = new URLSearchParams(useLocation().search)
  // const id = query.get('id')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(1000)
  }, [])

  // useEffect(() => {
  //   const fetch = async () => {
  //     try {
  //       const getPost = axios.get(
  //         `https://jsonplaceholder.typicode.com/posts/${id}`
  //       )
  //       const getUsers = axios.get(`https://jsonplaceholder.typicode.com/users`)
  //       const getComments = axios.get(
  //         `https://jsonplaceholder.typicode.com/comments`
  //       )
  //       const responses = await axios.all([getPost, getUser, getComments])
  //       setPost(responses[0].data)
  //       // setUser(responses.data)
  //       setComments(responses.data)
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   }
  //   fetch()
  // }, [])

  const params = useParams()
  useEffect(() => {
    requestOptions()
    getUser()
    getComments()
  }, [])

  async function getUser() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const json = await response.json()
    setUser(json[0])
  }

  async function requestOptions() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?id=${params.id}`
    )
    const json = await response.json()
    setPost(json[0])
  }

  async function getComments() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
    )
    const json = await response.json()
    setComments(json)
  }

  if (!loading) {
    return <BeatLoader />
  }
  if (loading) {
    return (
      <div>
        <h1 className={Detailsstyles.header}>{post?.title}</h1>
        <p className={Detailsstyles.body}>{post?.body}</p>
        <h2 className={Detailsstyles.user}>{user?.name}</h2>
        <p className={Detailsstyles.body}>
          <Comments comments={comments} />
        </p>
      </div>
    )
  }
}

export default Details
