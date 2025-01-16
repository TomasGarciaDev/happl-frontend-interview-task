import { Allowance } from '@/types/allowances'

const Card = ({ allowance }: { allowance: Allowance }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h3 className="font-medium text-base text-nowrap">{allowance.name}</h3>
    </div>
  )
}

export default Card
