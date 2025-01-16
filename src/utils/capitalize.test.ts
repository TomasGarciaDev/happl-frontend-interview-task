import { capitalize } from '@/utils/capitalize' // Adjust the import path if needed

describe('capitalize', () => {
  it('capitalizes the first letter of a lowercase word', () => {
    expect(capitalize('hello')).toBe('Hello')
  })
})
