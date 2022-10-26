import React from 'react'
import { NavLink } from 'react-router-dom'

const RecipeCard = ({recipe}) => {
  return (
    <div>
        {recipe.recipe_name}
        <NavLink to={`/recipe/${recipe.recipe_id}`}>See more</NavLink>
        </div>
  )
}

export default RecipeCard