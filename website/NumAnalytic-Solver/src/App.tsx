import { useState } from 'react'
import './App.css'
import Home from './Home'
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>NumAnalytic Solver</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
      <Home />
    </>
  )
}

export default App
