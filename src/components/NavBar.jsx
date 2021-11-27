import React from 'react'
import {NavLink} from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
      <div className='navbar-brand'>Youtube</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to='/' className="nav-link active">Main Page</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/about' className="nav-link active">About</NavLink>
        </li>

      </ul>
    </nav>
  )
}
