export const calulateUsagePorcentage = (
  amount: number,
  spent: number
): number => {
  if (amount === 0) return 0
  const porcentage = (spent / amount) * 100
  return Number(porcentage.toFixed(0))
}
