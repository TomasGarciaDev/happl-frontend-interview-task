import { capitalize } from '@/utils/capitalize'

describe('capitalize', () => {
  it('capitalizes the first letter of a lowercase word', () => {
    expect(capitalize('hello')).toBe('Hello')
  })
})
