import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    // console.log("Working ", count++);
    setCount(count+1);
  }
  return (
    <>
      
      <h1>Count is {count}</h1>
      <div className="card">
        <button onClick={handleClick}>
          count
        </button>
      </div>
      
    </>
  )
}

export default App


