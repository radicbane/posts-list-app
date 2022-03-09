import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/headerList/Header'
import Details from './screens/Details'

const Layout: FunctionComponent = () => {
  return (
    <div>
      <Link to="/">
        <Header />
      </Link>
      <Details />
    </div>
  )
}

export default Layout
