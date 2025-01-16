import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from '@/components/Card'
import { Allowance } from '@/types/allowances'

const mockAllowance: Allowance = {
  id: '1',
  name: 'Test Allowance',
  renewal: 'month',
  currency: '£',
  amount: 100,
  spent: 25,
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
      renewal: 'month',
      currency: '£',
      amount: 100,
      spent: 50,
      active: true,
      type: 'card',
    }

    render(<Card allowance={cardAllowance} />)

    const spendText = screen.getByText(/Spend Card/i)
    expect(spendText).toBeInTheDocument()
  })

  it('renders "Activate card" when the allowance is inactive', () => {
    const inactiveAllowance: Allowance = {
      id: '3',
      name: 'Inactive Allowance',
      renewal: 'month',
      currency: '£',
      amount: 0,
      spent: 0,
      active: false,
      type: 'card',
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

  it('renders the correct usage percentage', () => {
    render(<Card allowance={mockAllowance} />)

    const usageText = screen.getByText(/25% utilized/i)
    expect(usageText).toBeInTheDocument()
  })

  it('renders the correct amount and renewal type', () => {
    render(<Card allowance={mockAllowance} />)

    const amountText = screen.getByText(/£100 \/ Month/i)
    expect(amountText).toBeInTheDocument()
  })

  it('renders the progress bar with correct width', () => {
    render(<Card allowance={mockAllowance} />)

    const progressBar = screen.getByRole('progressbar')
    expect(progressBar).toHaveStyle('width: 25%')
  })
})
