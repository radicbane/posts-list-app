import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './Post'
import Postsstyles from './Posts.module.css'

function Posts() {
  const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   requestOptions()
  // }, [])

  // async function requestOptions() {
  //   const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  //   const json = await response.json()
  //   setPost(json)
  // }

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        )
        setPosts(data)
      } catch (err) {
        console.error(err)
      }
    }
    fetch()
  }, [])

  return (
    <div className={Postsstyles.container}>
      {posts.map((item) => (
        <Post id={item.id} title={item.title} body={item.body} posts={posts} />
      ))}
    </div>
  )
}

export default Posts
