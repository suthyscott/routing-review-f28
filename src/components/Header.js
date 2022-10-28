import React from "react"
import { NavLink } from "react-router-dom"
import "./Header.css"

const Header = () => {
    return (
        <nav>
            <NavLink
                to="/"
                end
                style={({ isActive }) => ({
                    background: isActive ? "#59A5D8" : "none"
                })}
            >
                Home
            </NavLink>
            <NavLink
                to="/auth"
                style={({ isActive }) => ({
                    background: isActive ? "#59A5D8" : "none"
                })}
            >
                Auth
            </NavLink>
            <NavLink
                to="/add"
                style={({ isActive }) => ({
                    background: isActive ? "#59A5D8" : "none"
                })}
            >
                Add Recipe
            </NavLink>
        </nav>
    )
}

export default Header
