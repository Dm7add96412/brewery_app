import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Search from '../components/Search'

const Root = () => {
  return (
    <div>
        <header>
            <nav>
                <Link to="/">Home Page</Link>
                <Search/>
            </nav>
        </header>
        <Outlet/>
        <footer>
        </footer>
    </div>
  )
}

export default Root