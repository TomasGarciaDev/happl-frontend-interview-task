import React, { useEffect, useState } from 'react'
import Card from '@/components/Card'
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

      {allowances && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 py-8 gap-4">
          {allowances.map((allowance) => (
            <Card key={allowance.id} allowance={allowance} />
          ))}
        </div>
      )}
    </div>
  )
}

export default List
