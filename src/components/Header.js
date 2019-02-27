import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/logo">LOGO</Link>
          </li>

          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <h1> Share and Improve your Idea for the world </h1>
      <div>
        <button>Get Started</button>
        <button>Explore Ideas</button>
      </div>
    </header>
  )
}
export default Header
