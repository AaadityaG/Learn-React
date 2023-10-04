import { useState } from 'react'
import './Events.css'

function App() {
  
  const[bg, setBack] = useState("red");
  const[name, setName] = useState("Click me");
  function bgChange(){
    setBack("yellow");
    setName("Clicked..😁");
  }

  function changeAgain(){
    setBack("green");
    setName("Again?..😃");
  }
  return (
    <>
      <div style={{backgroundColor:bg}}>
        <button onClick={bgChange} onDoubleClick={changeAgain}>{name}</button>
      </div>
    </>
  )
}

// export default App
