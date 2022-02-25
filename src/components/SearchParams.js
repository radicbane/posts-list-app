import React from 'react'
import { useSearchParams, Link } from 'react-router-dom'

const SearchParams = ({ posts }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        <input
          value={searchParams.get('posts') || ''}
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
            <Link to={`/posts/${post.id}`} key={post.id}>
              {post.title}
            </Link>
          ))}
      </nav>
    </div>
  )
}
export default SearchParams
