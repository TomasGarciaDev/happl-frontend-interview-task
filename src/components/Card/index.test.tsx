import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from '@/components/Card'
import { Allowance } from '@/types/allowances'

// Mock data matching the Allowance type
const mockAllowance: Allowance = {
  id: '1',
  name: 'Test Allowance',
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
})
