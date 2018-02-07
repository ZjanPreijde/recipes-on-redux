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

  onChange() {
    this.liked = !this.liked
  }

  // toggleLike() {
  //   this.props.onChange()
  // }

  render() {
    const { liked, onChange } = this.props

    return (
      <p className={ this.classNames() }>
        <button onChange={onChange}>
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
