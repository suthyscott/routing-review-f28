import React, {useState, useEffect} from 'react'

const AddRecipe = () => {
    const [recipeName, setRecipeName] = useState('')
    const [recipeImage, setRecipeImage] = useState('')

    const handleChange = (e) => {
        e.target.name === 'recipeName' ? setRecipeName(e.target.value) : setRecipeImage(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // axios.post request, using recipeName and recipeImage as values in req.body
        const body = {
            recipeImage,
            recipeName
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='Name of recipe' name='recipeName' onChange={e => handleChange(e)}/>
            <input placeholder='image url' name='recipeImage' onChange={e => handleChange(e)}/>
        </form>
    </div>
  )
}

export default AddRecipe