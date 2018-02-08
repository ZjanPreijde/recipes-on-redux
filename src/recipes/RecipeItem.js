// ./src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Title from '../components/Title'
import LikeButton from '../components/LikeButton'

import RecipeCategory from './RecipeCategory'
import './RecipeItem.css'

// import Vegetarian from '../images/vegetarian.svg'
// import Vegan from '../images/vegan.svg'
// import Pescatarian from '../images/pescatarian.svg'

export const recipeItemShape = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  vegan: PropTypes.bool,
  vegetarian: PropTypes.bool,
  pescatarian: PropTypes.bool,
  liked: PropTypes.bool
})

const PLACEHOLDER = 'http://via.placeholder.com/500x180?text=No%20Image'

class RecipeItem extends PureComponent {
  static propTypes = {
     ...recipeItemShape.isRequired,
   }

  render() {
    const { title, summary, vegan, vegetarian, pescatarian, photo, liked } = this.props
    const categories = { vegan, vegetarian, pescatarian }

    return(
      <article className="RecipeItem">
        <header>
          <div
            className="cover"
            style={{ backgroundImage: `url(${photo || PLACEHOLDER })` }} />
          <Title content={title} className="level-2" />
          <ul className="categories">
            <RecipeCategory { ...categories } />
          </ul>
        </header>
        <div>
          <p>{ summary }</p>
        </div>
        <footer>
          <LikeButton
            onClick={this.toggleLike}
            liked={liked}
          />
        </footer>
      </article>
    )
  }
}

export default RecipeItem
