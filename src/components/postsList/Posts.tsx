import React, { useState, useEffect, FunctionComponent } from 'react'
import useFetch from '../../hooks/useFetch'
import Post from '../postList/Post'
import Postsstyles from './Posts.module.css'
import { useSearchParams } from '../../../node_modules/react-router-dom/index'

const Posts: FunctionComponent = () => {
  const [posts, setPosts] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  let [postsData] = useFetch(
    `https://jsonplaceholder.typicode.com/posts`
  ) as any

  useEffect(() => {
    if (postsData.length > 0) {
      setPosts(postsData)
    }
  }, [postsData])

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
            key={post.id}
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
