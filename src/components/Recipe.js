import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Recipe.css'

const Recipe = () => {
  const [recipe, setRecipe] = useState({})
  const {id} = useParams()
  const url = "https://recipes.devmountain.com"
  console.log(id)

  // useEffect(() => {
  //   axios.get(`${url}/recipes/${id}`)
  //     .then(res => setRecipe(res.data))
  // }, [])

  return (
    <div>
      <div>Rosemary Seared Steak banner</div>
      <section className='info-box'>
        <div className='recipe-ingredients-box'>
          <div className='recipe-container'>
            <h2>Recipe</h2>
            <p>Prep Time: 15 minutes</p>
            <p>Cook Time: 20 minutes</p>
            <p>Serves: 2</p>
          </div>
          <div className='ingredients-container'>
          <h2>ingredients</h2>
            <p>2 new York steak</p>
            <p>1tbsp salt</p>
            <p>1tbsp pepper</p>
            <p>1 lemon</p>
            <p>5 sprigs of Rosemary</p>
          </div>
        </div>
        <div className='instructions-box'>
          <h2>instructions</h2>
          <p>Bacon ipsum dolor amet salami leberkas frankfurter, jowl landjaeger shankle buffalo ham hock boudin pig doner. Pancetta picanha alcatra doner bacon ham, ham hock cow shank. Brisket pork belly beef ribs, rump boudin alcatra landjaeger chicken. Doner ground round chuck beef ribs. Beef ribs cow jerky shankle meatball porchetta picanha capicola, chislic doner filet mignon leberkas bresaola pastrami jowl.

Turducken tongue bacon turkey, pork short ribs alcatra burgdoggen chuck capicola. Sirloin swine pancetta, venison pork pig pork belly. Chuck shankle sirloin, porchetta leberkas ham hock turkey kevin doner cupim shoulder. Turkey ribeye corned beef turducken pork chop, venison t-bone bacon jerky picanha tongue fatback alcatra.

Swine jowl ball tip meatball rump. Filet mignon turducken pork chop bacon ribeye bresaola beef fatback drumstick burgdoggen prosciutto boudin. Corned beef salami tongue rump kielbasa ham ball tip, pancetta pork chop picanha cupim filet mignon. Burgdoggen pork chop chuck, spare ribs kielbasa pastrami frankfurter bacon ribeye capicola.</p>
        </div>
      </section>
    </div>
  )
}

export default Recipe