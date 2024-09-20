import { Dialog } from './components/ui/dialog'

import { CreateGoal } from './components/create-goal'
//import { Summary } from './components/summary'
import { useState } from 'react'

//import { EmptyGoals } from './components/empty-goals'

//let count = 5

export function App() {
  const [count, setCount] = useState(5)
  const [summary, setSumary] = useState(null)

  function increment() {
    setCount(count + 1)
  }

  fetch('http://localhost:3333/summary')
    .then(response => {
      return response.json()
    })
    .then(data => {
      setSumary(data)
    })

  return (
    <Dialog>
      {/* <EmptyGoals /> */}
      <button type="button" onClick={increment}>
        Incrementar
      </button>

      <h1 className="text-4xl">{count}</h1>

      <pre>{JSON.stringify(summary, null, 2)}</pre>

      {/*   <Summary /> */}
      <CreateGoal />
    </Dialog>
  )
}
