// ./src/Title.js, case sensitive probably
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import './Title.css'

class Title extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired
  }
  render() {
    const { content } = this.props
    return  <h1 className="Title">{ content }</h1>
  }
}

export default Title
