import { render, waitFor, screen } from '@testing-library/react'
import List from '@/components/List'
import '@testing-library/jest-dom'
import 'jest-fetch-mock'
import data from '@/data/data.json'

describe('List', () => {
  beforeEach(() => {
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
})
