import { calulateUsagePorcentage } from './calculateUsagePorcentage'

describe('calulateUsagePorcentage', () => {
  it('calculates correct porcentage for normal values', () => {
    expect(calulateUsagePorcentage(100, 50)).toBe(50)
  })

  it('returns 0 when the amount is 0', () => {
    expect(calulateUsagePorcentage(0, 50)).toBe(0)
  })

  it('roundes the result to the nearest integer', () => {
    expect(calulateUsagePorcentage(100, 33)).toBe(33)
  })

  it('returns 0 when the spent is 0', () => {
    expect(calulateUsagePorcentage(100, 0)).toBe(0)
  })
})
