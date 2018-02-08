import React, { PureComponent } from 'react';
import RecipesContainer from './recipes/RecipesContainer'
import './App.css'


class App extends PureComponent {
  render() {
    return (
      <div class="App container">
        <RecipesContainer />
      </div>
    )
  }
}

export default App;
