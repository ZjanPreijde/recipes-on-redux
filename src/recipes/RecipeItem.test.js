// ./src/recipes/RecipeItem.test.js
import React       from 'react'
import { shallow } from 'enzyme'
import RecipeItem  from './RecipeItem'

import Vegetarian from '../images/vegetarian.svg'
import Vegan from '../images/vegan.svg'
import Pescatarian from '../images/pescatarian.svg'

describe('<RecipeItem general />', () => {
  const recipe = {
    title: 'Recipe', summary: 'Recipe',
    vegan: false, vegetarian: true, pescatarian: false,
  }
  const container = shallow(<RecipeItem { ...recipe } />)

  it('is wrapped in an article tag with class name "recipe"', () => {
    expect(container).toHaveTagName('article')
    expect(container).toHaveClassName('recipe')
  })
  it('contains the title', () => {
    expect(container.find('h1')).toHaveText(recipe.title)
  })
})

describe('<RecipeItem vegan />', () => {
  const recipe_vegan = {
    title: 'Vegan', summary: 'Vegan',
    vegan: true, vegetarian: true, pescatarian: false,
  }
  const container = shallow(<RecipeItem { ...recipe_vegan } />)

  it('shows an img when it is vegan', () => {
    expect(container.find('ul > li > img')).toHaveProp('src', Vegan)
  })
})

describe('<RecipeItem vegetarian />', () => {
  const recipe_vegetarian = {
    title: 'Vegetarian, not vegan', summary: 'Vegetarian, not vegan',
    vegan: false, vegetarian: true, pescatarian: false,
  }
  const container = shallow(<RecipeItem { ...recipe_vegetarian } />)

  it('shows an img when it is not vegan but is vegetarian', () => {
    expect(container.find('ul > li > img')).toHaveProp('src', Vegetarian)
  })
})

describe('<RecipeItem pescatarian />', () => {
  const recipe_pescatarian = {
    title: 'Pescatarian', summary: 'Pescatarian',
    vegan: false, vegetarian: false, pescatarian: true,
  }
  const container = shallow(<RecipeItem { ...recipe_pescatarian } />)

  it('shows an img when it is pescatarian', () => {
    expect(container.find('ul > li > img')).toHaveProp('src', Pescatarian)
  })
})
