import { useState } from 'react'
import './App.css'

function App() {
  let newTime = new Date().toLocaleTimeString();
  const [time, setCount] = useState(newTime)
  const update = () => {
    setCount((time) => new Date().toLocaleTimeString())
  }
  return (
    <>
      <h1>Current Time : {newTime}</h1>
      <div className="card">
        <button onClick={update}>
          Refresh
        </button>
      </div>
    </>
  )
}

export default App
