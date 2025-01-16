import React, { useEffect, useState } from 'react'
import { Allowance } from '@/types/allowances'

const List = () => {
  const [allowances, setAllowances] = useState<Allowance[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/allowances')
      const { result } = await response.json()
      setAllowances(result)
    }

    fetchData()
  }, [])

  return (
    <div className="p-8 w-full">
      <h2 className="font-semibold text-2xl leading-5">Allowances</h2>
      <div className="py-8">
        {allowances.map((allowance) => (
          <div key={allowance.id}>{JSON.stringify(allowance)}</div>
        ))}
      </div>
    </div>
  )
}

export default List
