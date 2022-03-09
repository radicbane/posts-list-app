import Posts from './components/postsList/Posts'
import Header from './components/headerList/Header'
import { Link } from 'react-router-dom'
import './index.css'

function App() {
  return (
    <div className="container">
      <Link to="/">
        <Header />
      </Link>
      <Posts />
    </div>
  )
}

export default App
