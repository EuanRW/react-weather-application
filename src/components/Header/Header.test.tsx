import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Header from './Header'

describe('Header component', () => {
  it('renders the component', () => {
    const { getByText } = render(<Header theme="light" setTheme={() => {}} />)
    const title = getByText('My Curriculum Vitae')
    expect(title).toBeInTheDocument()
  })

  it('switches theme on button click', () => {
    const setTheme = jest.fn()
    const { getByRole } = render(<Header theme="light" setTheme={setTheme} />)
    const button = getByRole('button')
    fireEvent.click(button)
    expect(setTheme).toHaveBeenCalledTimes(1)
    expect(setTheme).toHaveBeenCalledWith('dark')
  })
})
