// src/components/LikeButton.test.js
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import LikeButton from './LikeButton'

describe('<LikeButton />', () => {
  const toggleLike = sinon.spy()
  const button = shallow(<LikeButton
     liked={false}
     onChange={toggleLike} />)

  it('is wrapped in a div with class "like"', () => {
    expect(button).toHaveTagName('div')
    expect(button).toHaveClassName('like')
  })
  it('has an initial state for "liked", that is "false"', () => {
    expect(button).toHaveState('liked', false)
  })

  describe('clicking the button', () => {
    it('calls "onChange"', () => {
      button.find('button').simulate('click')
      expect(toggleLike.callCount).toBe(1)
    })
  })

  // describe('click it', () => {
  //   it('toggles the "liked" state', () => {
  //     // initial
  //     expect(button).toHaveState('liked', false)
  //
  //     // first click
  //     button.find('button').simulate('click')
  //     expect(button).toHaveState('liked', true)
  //
  //     // second click
  //     button.find('button').simulate('click')
  //     expect(button).toHaveState('liked', false)
  //   })
  // })
})
