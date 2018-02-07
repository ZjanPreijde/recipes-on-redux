// ./src/components/Title.test.js
import React from 'react'
import { shallow } from 'enzyme'
import Title from './Title'

describe('<Title />', () => {
  const title = shallow(<Title content="Hello, World" />)
  it('has a wrapping h1 tag', () => {
    expect(title).toHaveTagName('h1')
  })
  it('renders the content', () => {
    expect(title).toHaveText('Hello, World')
  })
})
