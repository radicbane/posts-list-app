import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './Post'
import Postsstyles from './Posts.module.css'
import { useSearchParams } from 'react-router-dom'

function Posts() {
  const [posts, setPosts] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    fetch()
  }, [])

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

  return (
    <div>
      <input
        className={Postsstyles.input}
        value={searchParams.get('posts') || ''}
        placeholder="Searching ..."
        onChange={(event) => {
          let posts = event.target.value
          if (posts) {
            setSearchParams({ posts })
          } else {
            setSearchParams({})
          }
        }}
      />
      {posts
        .filter((post) => {
          let posts = searchParams.get('posts')
          if (!posts) return true
          let title = post.title.toLowerCase()
          return title.startsWith(posts.toLowerCase())
        })
        .map((post) => (
          <Post
            id={post.id}
            title={post.title}
            body={post.body}
            posts={posts}
          />
        ))}
    </div>
  )
}

export default Posts
