import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from '@/components/Card'
import { Allowance } from '@/types/allowances'

const mockAllowance: Allowance = {
  id: '1',
  name: 'Test Allowance',
  active: true,
  type: 'Test Type',
}

describe('Card', () => {
  it('renders the allowance name as a heading', () => {
    render(<Card allowance={mockAllowance} />)

    const heading = screen.getByRole('heading', { name: /test allowance/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders without crashing with valid data', () => {
    const { container } = render(<Card allowance={mockAllowance} />)
    expect(container).toBeInTheDocument()
  })

  it('renders the capitalized allowance type', () => {
    render(<Card allowance={mockAllowance} />)

    const typeText = screen.getByText(/Test type/i)
    expect(typeText).toBeInTheDocument()
  })

  it('renders "Spend" before type when type is "card"', () => {
    const cardAllowance: Allowance = {
      id: '2',
      name: 'Card Allowance',
      type: 'card',
      active: true,
    }

    render(<Card allowance={cardAllowance} />)

    const spendText = screen.getByText(/Spend Card/i)
    expect(spendText).toBeInTheDocument()
  })

  it('renders "Activate card" when the allowance is inactive', () => {
    const inactiveAllowance: Allowance = {
      id: '3',
      name: 'Inactive Allowance',
      type: 'card',
      active: false,
    }

    render(<Card allowance={inactiveAllowance} />)

    const activateText = screen.getByText(/Activate card/i)
    expect(activateText).toBeInTheDocument()
  })

  it('does not render "Activate card" when the allowance is active', () => {
    render(<Card allowance={mockAllowance} />)

    const activateText = screen.queryByText(/Activate card/i)
    expect(activateText).not.toBeInTheDocument()
  })
})
