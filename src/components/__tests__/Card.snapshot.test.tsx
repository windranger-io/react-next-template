import React from 'react'
import renderer from 'react-test-renderer'
import Card from '../Card'

it('renders card unchanged', () => {
  const tree = renderer.create(<Card />).toJSON()
  expect(tree).toMatchSnapshot()
})
