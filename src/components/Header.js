import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <NavLink to='/'>
            Home
        </NavLink>
        <NavLink to='/auth'>
            Auth
        </NavLink>
        <NavLink to='/add'>
            Add Recipe
        </NavLink>
    </div>
  )
}

export default Header