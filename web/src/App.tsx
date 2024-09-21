import { Dialog } from './components/ui/dialog'

import { CreateGoal } from './components/create-goal'
//import { Summary } from './components/summary'
import { useEffect, useState } from 'react'
import { Summary } from './components/summary'
import { EmptyGoals } from './components/empty-goals'

//import { EmptyGoals } from './components/empty-goals'

export function App() {
  const [summary, setSumary] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3333/summary')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setSumary(data.summary)
      })
  }, [])

  return (
    <Dialog>
      {/* IF no REACT */}
      {summary?.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}
