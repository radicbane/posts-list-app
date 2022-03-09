import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {
  BrowserRouter,
  Routes,
  Route,
} from '../node_modules/react-router-dom/index'
import Layout from './Layout'
import Details from './screens/Details'
import Posts from './components/postsList/Posts'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="posts" element={<Posts />} />
        <Route
          path="posts/:id"
          element={
            <Layout>
              <Details />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
