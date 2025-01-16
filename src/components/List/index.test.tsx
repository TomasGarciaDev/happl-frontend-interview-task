import { render, waitFor, screen } from '@testing-library/react'
import List from '@/components/List'
import '@testing-library/jest-dom'
import 'jest-fetch-mock'
import data from '@/data/data.json'

describe('List', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResponse(JSON.stringify({ result: data }), { status: 200 })
  })

  it('renders as expected', async () => {
    const { container } = render(<List />)
    await waitFor(() => expect(container).toMatchSnapshot())
  })

  it('renders the Allowances heading', async () => {
    render(<List />)

    const heading = await screen.findByRole('heading', { name: /Allowances/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders the correct number of Card components based on fetched data', async () => {
    render(<List />)

    const cards = await screen.findAllByRole('heading', { level: 3 })
    expect(cards).toHaveLength(data.length)
  })

  it('renders the correct content for each Card', async () => {
    render(<List />)

    for (const allowance of data) {
      const allowanceName = await screen.findByRole('heading', {
        name: new RegExp(allowance.name, 'i'),
      })
      expect(allowanceName).toBeInTheDocument()
    }
  })
})
