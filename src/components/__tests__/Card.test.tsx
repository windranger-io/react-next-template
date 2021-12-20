/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from '../Card'

describe('Card', () => {
  it('check if testId1 is present', () => {
    render(<Card />)

    const paragraph = screen.getByText(/simple test sample!/i)

    expect(paragraph).toBeInTheDocument()
  })
})
