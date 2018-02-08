// ./src/recipes/RecipesContainer.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Title from '../components/Title'

import RecipeItem, { recipeItemShape } from './RecipeItem'
import RecipeEditor from './RecipeEditor'

import './RecipesContainer.css'

class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.arrayOf(recipeItemShape).isRequired,
  }

  renderRecipe(recipe, index) {
    return(
      <RecipeItem
        key={index}
        { ...recipe }
      />
    )
  }

  render() {
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="Redux Recipes" />
          <RecipeEditor />
        </header>

        <main>
          { this.props.recipes.map(this.renderRecipe.bind(this)) }
        </main>
        <footer>
          <RecipeEditor />
        </footer>
      </div>
    )
  }
}
const mapStateToProps = ({ recipes }) => ({
  recipes})
// export default RecipesContainer
export default connect(mapStateToProps)(RecipesContainer)
