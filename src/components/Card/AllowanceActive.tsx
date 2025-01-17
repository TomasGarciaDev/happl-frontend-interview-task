import { Allowance } from '@/types/allowances'
import { calulateUsagePorcentage } from '@/utils/calculateUsagePorcentage'
import { capitalize } from '@/utils/capitalize'

export const AllowanceActive = ({ allowance }: { allowance: Allowance }) => {
  const usagePorcentage = calulateUsagePorcentage(
    allowance.amount,
    allowance.spent
  )
  return (
    <div className="px-6 gap-2 overflow-hidden">
      <div className="flex justify-between">
        <p className="text-sm font-normal text-gray-500 leading-5">
          {usagePorcentage}% utilized
        </p>
        <p className="text-sm font-normal text-gray-300 leading-5">
          {allowance.currency}
          {allowance.amount} / {capitalize(allowance.renewal)}
        </p>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
        <div
          className="bg-lime-400 rounded-full h-1"
          style={{ width: `${usagePorcentage}%` }}
          role="progressbar"
        ></div>
      </div>
    </div>
  )
}
