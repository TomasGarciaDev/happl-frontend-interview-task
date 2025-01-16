import { Allowance } from '@/types/allowances'
import { capitalize } from '@/utils/capitalize'

const Card = ({ allowance }: { allowance: Allowance }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 pt-2">
      <div className="grid grid-rows-4">
        <div className="px-6 py-3">
          <h3 className="font-medium text-base leading-6 text-nowrap">
            {allowance.name}
          </h3>
        </div>
        <div className="px-6 self-start">
          <p className="text-sm font-normal text-gray-400 leading-5">
            {allowance.type === 'card' && 'Spend '}
            {capitalize(allowance.type)}
          </p>
        </div>
        <div></div>
        {!allowance.active && (
          <div className="content-center bg-gray-100 overflow-hidden rounded-b-lg">
            <p className="px-4 text-sm font-normal text-lime-500 leading-5">
              Activate card
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
