import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Posts from './components/Posts'
import Header from './components/Header'
import { Link } from 'react-router-dom'
import './index.css'

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
    <div className="container">
      <Link to="/">
        <Header />
      </Link>
      <Posts posts={posts} />
    </div>
  )
}

export default App
