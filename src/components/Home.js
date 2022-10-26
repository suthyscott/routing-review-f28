import React, {useState, useEffect} from 'react'
import axios from 'axios'
import RecipeCard from './RecipeCard'

const Home = () => {
  const [recipes, setRecipes] = useState([])

  const url = "https://recipes.devmountain.com"

  const getRecipes = () => {
    axios.get(`${url}/recipes`)
      .then(res => setRecipes(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {getRecipes()}, [])

  return (
    <div>
      {recipes.map(recipe => <RecipeCard recipe={recipe} />)}
    </div>
  )
}

export default Home