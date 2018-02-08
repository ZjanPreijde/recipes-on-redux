// src/components/LikeButton.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import HeartGrey from '../images/heart-grey.svg'
import HeartRed from '../images/heart-red.svg'

import './LikeButton.css'

class LikeButton extends PureComponent {
  static propTypes = {
    liked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  }

  classNames() {
    const { liked } = this.props
    let classes = 'like'
    if (liked) { classes += ' liked' }
    return classes
  }

  toggleLike() {
  }

  render() {
    const { liked } = this.props

    return (
      <p className={ this.classNames() }>
        <button>
          <img className="heart" alt="liked" src={ liked ? HeartRed : HeartGrey } />
          <span className="copy">
            <img className="heart" alt="not liked" src={ liked ? HeartRed : HeartGrey } />
          </span>
        </button>
        <span className="likes">{ liked ? 'You like this' : null }</span>
      </p>
    )}
}

export default LikeButton
