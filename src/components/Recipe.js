import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Recipe = () => {
  const [recipe, setRecipe] = useState({})
  const {id} = useParams()
  const url = "https://recipes.devmountain.com"
  console.log(id)

  useEffect(() => {
    axios.get(`${url}/recipes/${id}`)
      .then(res => setRecipe(res.data))
  }, [])

  return (
    <div>
      {recipe.recipe_name}
    </div>
  )
}

export default Recipe