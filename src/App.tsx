import { useState, useEffect } from 'react'
import './App.css'
import Home from './Home'
import { Button } from "@/components/ui/button"
import init, { add } from "wasm-lib";

function App() {
  const [count, setCount] = useState(0)
  const [ans, setAns] = useState(0);

  useEffect(() => {
    init().then(() => {
      setAns(add(1, 1));
    })
  }, []);

  return (
    <>
      <h1>NumAnalytic Solver</h1>
      <Home />
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
      <div className="card">
        <h1>Ans is {ans}</h1>
        <Button onClick={() => setAns((ans) => ans + 69)}>
          +69
        </Button>
        <p>{ans} + 69 = {ans}</p>
      </div>
    </>
  )
}

export default App
