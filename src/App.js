import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Posts from './components/Posts'
import Header from './components/Header'
import { Link } from 'react-router-dom'
import SearchParams from './components/SearchParams'

function App() {
  const [posts, setPosts] = useState([])

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
    <div>
      <Link to="/">
        <Header />
      </Link>
      <SearchParams posts={posts} />
      <Posts />
    </div>
  )
}

export default App
